const IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const HAS_ACCEPTED_TRACKING_KEY = '__ACCEPTED_COOKIES__';

const acceptTracking = () => IS_BROWSER && localStorage.setItem(HAS_ACCEPTED_TRACKING_KEY, true);
const hasAcceptedTracking = () => get(HAS_ACCEPTED_TRACKING_KEY);
const get = (key) => IS_BROWSER && localStorage.getItem(key);
const set = (key, value) => {
  if (hasAcceptedTracking()) {
    IS_BROWSER && localStorage.setItem(key, value);
  }
};
const remove = (key) => IS_BROWSER && localStorage.removeItem(key);

export {
  hasAcceptedTracking,
  acceptTracking,
  get,
  set,
  remove,
};