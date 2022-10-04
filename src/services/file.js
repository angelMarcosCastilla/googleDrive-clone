
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

export async function getFiles(userId) {
  try {
    const result = await clientSupabase.from("files")
    .select("*")
    .eq("estado", true)
    .match({
      userId
    })

    return result
  } catch (error) {
    console.log(error)
  }
}

export const solfDeleteFile = async (id) => {
  try {
    const result = await clientSupabase.from("files").update({ estado: false }).match({
      id,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const updateFile = async (id, data) => {
  try {
    const result = await clientSupabase.from("files").update(data).match({
      id,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}