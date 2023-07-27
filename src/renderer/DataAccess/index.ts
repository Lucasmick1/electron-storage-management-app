export const getTable = <T>(tableName: string): T | null => {
  try {
    const table = localStorage.getItem(tableName);

    if (!table) return null;

    return JSON.parse(table);
  } catch (error) {
    console.error('[ERROR GET TABLE]', error);

    return null;
  }
};

export const updateTable = <T>({ name, table }: { name: string; table: T }) => {
  try {
    localStorage.setItem(name, JSON.stringify(table));
  } catch (error) {
    console.error('[ERROR CREATE TABLE]', error);
  }
};
