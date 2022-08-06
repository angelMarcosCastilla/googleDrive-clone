import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clientSupabase } from '../supabase/client';
import { getFoldersUsers } from '../services/folders';
import { loginUser } from '../store/slices/userSlice';
import { parsestructureFolders } from '../utils/foldersUtils';
import { addAllFolder, addFoderStructure } from '../store/slices/folderSlice';

export default function useUser() {
  const [hasUser, setHasUser] = useState(undefined);
  const [loaderSession, setLoaderSession] = useState(false);
  const dispatch = useDispatch();
  console.log("remder")
  useEffect(() => {
    const user = clientSupabase.auth.user();
    if (user) {
      dispatch(loginUser(user));
      getFoldersUsers(user?.id).then(folders => {
        const { data: foldersData } = folders;
        const structureFolderData = parsestructureFolders(foldersData);
        dispatch(addAllFolder(foldersData));
        dispatch(addFoderStructure(structureFolderData));
        setHasUser(user);
      });
      return
    } else setHasUser(null);


    /* escuchando la sesion */
    const { data: listener } = clientSupabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setLoaderSession(true);
          const { user } = session;
          dispatch(loginUser(user));
          getFoldersUsers(user?.id).then(folders => {
            console.log("trayendo data de folders signin", user);
            const { data: foldersData } = folders;
            const structureFolderData = parsestructureFolders(foldersData);
            dispatch(addAllFolder(foldersData));
            dispatch(addFoderStructure(structureFolderData));
            setHasUser(user);
            return null
          });
        }
      }
    );

    return () => listener?.unsubscribe();
  }, []);

  return { hasUser, loaderSession };
}
