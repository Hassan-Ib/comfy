export const cartName = "cart";

export const setLocalData = (dataName, data) => {
  const stringifyData = JSON.stringify(data);
  window.localStorage.setItem(dataName, stringifyData);
};
export const getLocalData = (dataName) => {
  const data = window.localStorage.getItem(dataName);
  return JSON.parse(data);
};
