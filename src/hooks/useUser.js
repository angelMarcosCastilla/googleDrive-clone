import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clientSupabase } from '../supabase/client';
import { getFoldersUsers } from '../services/folders';
import { loginUser } from '../store/slices/userSlice';
import { parsestructureFolders } from '../utils/foldersUtils';
import { addAllFolder, addFoderStructure } from '../store/slices/folderSlice';
import { getFiles } from '../services/file';
import { addAllFile } from '../store/slices/fileSlice';

export default function useUser() {
  const [hasUser, setHasUser] = useState(undefined);
  const [loaderSession, setLoaderSession] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = clientSupabase.auth.user();
    if (user) {
      dispatch(loginUser(user));
      Promise.all([getFoldersUsers(user?.id), getFiles(user?.id)]).then(([folders, files]) => {
        const { data: foldersData } = folders;
        const structureFolderData = parsestructureFolders(foldersData);
        dispatch(addAllFolder(foldersData));
        dispatch(addFoderStructure(structureFolderData));
        dispatch(addAllFile(files.data)); 
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
          Promise.all([getFoldersUsers(user?.id), getFiles(user?.id)]).then(([folders, files]) => {
            const { data: foldersData } = folders;
            const structureFolderData = parsestructureFolders(foldersData);
            dispatch(addAllFolder(foldersData));
            dispatch(addFoderStructure(structureFolderData));
            dispatch(addAllFile(files.data)); 
            setHasUser(user);
            console.log(files);
            return null
          });
        }
      }
    );

    return () => listener?.unsubscribe();
  }, []);

  return { hasUser, loaderSession };
}
