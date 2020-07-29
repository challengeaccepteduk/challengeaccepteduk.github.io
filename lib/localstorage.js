const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const HAS_ACCEPTED_TRACKING_KEY = '__ACCEPTED_COOKIES__';

const acceptTracking = () => isBrowser && localStorage.setItem(HAS_ACCEPTED_TRACKING_KEY, true);

const hasAcceptedTracking = () => get(HAS_ACCEPTED_TRACKING_KEY);

const get = (key) => {
  return isBrowser && localStorage.getItem(key);
};

const set = (key, value) => {
  if (get(HAS_ACCEPTED_TRACKING_KEY)) {
    isBrowser && localStorage.setItem(key, value);
  }
};

const remove = (key) => isBrowser && localStorage.removeItem(key);

export {
  hasAcceptedTracking,
  acceptTracking,
  get,
  set,
  remove,
};