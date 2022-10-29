export const isMobile = ((): boolean => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return navigator.userAgent.includes('Mobile');
})();
