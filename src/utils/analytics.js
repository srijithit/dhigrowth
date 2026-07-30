/**
 * Safe ad tracking wrapper for Meta Pixel (fbq) and Google Analytics/Tag Manager (gtag)
 * Logs events to the local developer console for testing.
 */
export const trackAdEvent = (eventName, params = {}) => {
  // Log to console for local testing on localhost
  console.log(`%c[Ad Tracking Event] ${eventName}`, 'color: #4A72EB; font-weight: bold; font-size: 11px;', params);
  
  // Dispatch Meta/Facebook Pixel Event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
  
  // Dispatch Google Analytics / Tag Manager Event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};
