
import { clientSupabase } from "../supabase/client"

export function uploadFile(file, folderId) {
  return clientSupabase.storage
    .from("folders")
    .upload(`${folderId}/${Date.now()}`, file)
}

export async function createFile({ name, key, foldersId, userId }) {
  try {
    const result = await clientSupabase.from("files").insert({
      name,
      key,
      foldersId,
      userId,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getFiles( userId) {
  try {
    const result = await clientSupabase.from("files").select("*").match({
      userId 
    })
    
    return result
  } catch (error) {
    console.log(error)
  }
}