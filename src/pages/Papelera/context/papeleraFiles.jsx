/* eslint-disable react/react-in-jsx-scope */
import { createContext , useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filesDelete } from "../../../services/file";



const PapeleraFilesContext = createContext();

const PapeleraFilesProvider = ({ children }) => {

  const [files, setFiles] = useState(null);

  const user = useSelector(state => state.user);

  const deleteFolderForPapelera =  (id) => {
    filesDelete(id).then(() => {
      setFiles(files.filter(file => file.id !== id));
    });
  }
  useEffect(() => {
    filesDelete(user.id).then(res => setFiles(res.data));
  }, []);

  

  return (
    <PapeleraFilesContext.Provider value={ {files, deleteFolderForPapelera}}>
      {children}
    </PapeleraFilesContext.Provider>
  );
}



export {PapeleraFilesContext}
export default PapeleraFilesProvider