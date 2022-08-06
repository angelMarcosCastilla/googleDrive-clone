import { clientSupabase } from "../supabase/client"

export const createFolder = async (folderName, parentFolderId, idUser) => {
  try {
    const result = await clientSupabase.from("folders")
      .insert({
        name: folderName,
        folder_root: parentFolderId,
        id_user: idUser,
      })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getFoldersUsers = async (idUser) => {
  try {
    const result = await clientSupabase.from("folders")
      .select("*")
      .eq("id_user", idUser)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deletefolders = async (idFolder) => {
  try {
    const result = await clientSupabase.from("folders")
      .delete()
      .eq("id", idFolder)
    return result
  } catch (error) {
    console.log(error)
  }
}