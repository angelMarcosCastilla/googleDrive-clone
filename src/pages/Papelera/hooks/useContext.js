import { useContext } from "react"
import { PapeleraFilesContext } from "../context/papeleraFiles"

export default function useContextFiles() {

  const {files, deleteFolderForPapelera} = useContext(PapeleraFilesContext)
  return {files, deleteFolderForPapelera}
}
