export const fetchUsersCSV = async (path: string): Promise<string> => {
  const usersFileCSV = await fetch(`${path}`);
  const usersBlob = await usersFileCSV.blob();
  const text = await usersBlob.text();

  return text;
};
