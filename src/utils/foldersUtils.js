export const parsestructureFolders = (folders) => {
  const result = folders.reduce((acc, curr) => {
    const { folder_root: root } = curr;
    if (!acc[root]) {
      acc[root] = [];
    }
    acc[root].push(curr);
    return acc;
  }, {})

  return result;
}

export function subnivelesFolder(folder, parentFolder= "root") {
  let parseFolders = []
  const folders = folder.filter((el) => el.folder_root === parentFolder);
  for(let i=0; i< folders.length; i++){
    const currentFolderParent = folders[i].name
    parseFolders=[...parseFolders, {...folders[i], 	subCarpetas:subnivelesFolder(folder,currentFolderParent)}]
  }
  return parseFolders
}