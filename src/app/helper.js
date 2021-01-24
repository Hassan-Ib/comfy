export const toggleClass = (className, element) => {
  const containClassName = element.classList.contains(className);
  console.log(className, element, containClassName);
  !containClassName
    ? addClass(className, element)
    : removeClass(className, element);
};

export const classSelector = (className) => {
  return document.querySelector(className);
};
export const attributeSelector = (attribute) => {
  return document.querySelectorAll(attribute);
};

export const addClass = (className, element) => {
  element.classList.add(className);
};
export const removeClass = (className, element) => {
  element.classList.remove(className);
};
