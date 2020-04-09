/**
 * @param {Array} date - date in milliseconds
 * @returns {String} - Formated date
 */
export const timeSinceFormat = (date) => {
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years ago';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months ago';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

/**
 * @param {Array} url - url link from API
 * @returns {String} - domain name from complete url
 */
export const getDomain = (url) => {
  if (!url) return '';
  const splitArr = url.split('/');
  return splitArr[2];
};

/**
 * @param {String} key - local storage key
 * @param {String} value - value of localstorage
 */
export const setLocalstorage = (key, value) => {
  if (typeof window !== 'undefined') {
    let existing = localStorage.getItem(key);
    existing = existing ? existing.split(',') : [];
    existing.push(value);
    localStorage.setItem(key, existing.toString());
  }
};

/**
 * @param {String} key - key of localstorage
 * @returns {Array} - value stored in localstorage
 */
export const getLocalstorage = (key) => {
  if (typeof window !== 'undefined') {
    const objectIds =
      localStorage &&
      localStorage.getItem(key) &&
      localStorage.getItem(key).split(',');
    return objectIds;
  }
  return [];
};
/**
 * @param {String} key - session storage key
 * @param {Json} value - value of session storage
 */
export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
/**
 * @param {String} key - key of sessionStorage
 * @returns {Json} - value stored in sessionStorage
 */
export const getSessionStorage = (key) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem(key));
  }
  return {};
};
