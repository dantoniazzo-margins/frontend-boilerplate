const useLocalStorage = () => {
  const getItem = (key: string) => {
    return localStorage.getItem(key);
  };
  const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getParsedItem = (key: string) => {
    const itemString = getItem(key);
    if (itemString) return JSON.parse(itemString);
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    getItem,
    setItem,
    getParsedItem,
    removeItem,
    clearLocalStorage,
  };
};

export default useLocalStorage;
