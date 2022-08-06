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