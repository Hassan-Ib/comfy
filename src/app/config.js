export const cartName = "cart";

export class Storage {
  static setLocalData(dataName, data) {
    const stringifyData = JSON.stringify(data);
    window.localStorage.setItem(dataName, stringifyData);
  }
  static getLocalData(dataName) {
    const data = window.localStorage.getItem(dataName);
    return JSON.parse(data);
  }
}
