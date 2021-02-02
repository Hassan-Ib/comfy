export const cartName = "cart";

export class Storage {
  setLocalData(dataName, data) {
    const stringifyData = JSON.stringify(data);
    window.localStorage.setItem(dataName, stringifyData);
  }
  getLocalData(dataName) {
    const data = window.localStorage.getItem(dataName);
    return JSON.parse(data);
  }
}
