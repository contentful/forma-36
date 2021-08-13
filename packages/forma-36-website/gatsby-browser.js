import { createTracking } from '@contentful/experience-tracking';
import * as trackingPlan from './src/analytics/generated';

const OSANO_KEY = process.env.GATSBY_OSANO_KEY;
const OSANO_F36_WEBSITE_KEY = process.env.GATSBY_OSANO_F36_WEBSITE_KEY;
const SEGMENT_KEY = process.env.GATSBY_SEGMENT_KEY;

export const onClientEntry = () => {
  if (OSANO_KEY && OSANO_F36_WEBSITE_KEY) {
    initOsano();
  } else {
    // eslint-disable-next-line no-console
    console.warn('Analytics services won’t initialize');
  }
};

/**
 * Function that sets up Osano, our consent management tool
 */
function initOsano() {
  const osanoScriptUrl = `https://cmp.osano.com/${OSANO_KEY}/${OSANO_F36_WEBSITE_KEY}/osano.js`;
  const script = document.createElement('script');
  const head = document.getElementsByTagName('head')[0];

  script.src = osanoScriptUrl;
  script.async = true;

  script.addEventListener('error', () => {
    // eslint-disable-next-line no-console
    console.error('Osano script error');
  });
  script.addEventListener(
    'load',
    () => {
      // cm is Osano's cookie management api
      const { cm } = window.Osano;
      // Get the current (or default) consent options
      const consentOptions = cm.getConsent();

      cm.on('osano-cm-initialized', function () {
        /**
         * The init function for Osano should run only once,
         * either from Osano or when Osano script is loaded
         * */
        if (!window.consentInitialized) {
          handleConsent(consentOptions);
          window.consentInitialized = true;
        }
      });
      cm.on('osano-cm-consent-saved', function (newConsentOptions) {
        // This event is called everytime the user saves their consent options
        handleConsent(newConsentOptions);
      });
    },
    false,
  );

  head.appendChild(script);
}

/**
 * Function that handles what should happen when a user changes their consent options
 *
 * @param {Object} newConsentOptions - return value of `cm.getConsent()` from Osano’s client
 */
function handleConsent(newConsentOptions) {
  const savedConsent = window.localStorage.getItem('consent');

  const consentOptionsChanged =
    JSON.stringify(newConsentOptions) !== savedConsent;

  if (consentOptionsChanged) {
    // Save consent in localStorage for later
    window.localStorage.setItem('consent', JSON.stringify(newConsentOptions));
  }

  const consent = {
    analytics: newConsentOptions.ANALYTICS === 'ACCEPT',
    personalization: newConsentOptions.PERSONALIZATION === 'ACCEPT',
    marketing: newConsentOptions.MARKETING === 'ACCEPT',
  };

  // if user consent to analytics, but segmentClient is still not in window.tracking
  // initialize Segment
  if (consent.analytics && !window.tracking) {
    initSegment(consent);
  }

  // If any option was changed to "DENY"
  // we need to reload the page to remove segment
  const previousConsent = JSON.parse(savedConsent) ?? {};
  const analyticsDenied =
    previousConsent.ANALYTICS === 'ACCEPT' && !consent.analytics;
  const marketingDenied =
    previousConsent.MARKETING === 'ACCEPT' && !consent.marketing;
  const personalizationDenied =
    previousConsent.PERSONALIZATION === 'ACCEPT' && !consent.personalization;

  if (analyticsDenied || marketingDenied || personalizationDenied) {
    window.location.reload();
  }
}

/**
 * Funtion that will set up Segment, initialize its client
 * and save it to the window object to make it available for the rest of the application
 *
 * @param {Object} consent - object that will be used in segmentClient.initialize()
 * @param {boolean} consent.analytics - it tells if analytics was accepted
 * @param {boolean} consent.marketing - it tells if marketing was accepted
 * @param {boolean} consent.personalization - it tells if personalization was accepted
 */
function initSegment(consent) {
  // initialize Segment client
  const segmentClient = createTracking({
    segment: {
      key: SEGMENT_KEY,
      plan: trackingPlan,
    },
  });

  segmentClient.initialize('userId', {
    shared: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      user_key: 'random user id',
    },
    consent,
    integrations: ['Google Analytics'],
  });

  // save segmentClient in the window
  // to be used for tracking in the rest of the application
  window.tracking = segmentClient;

  // track first page view after the consent was accepted
  window.tracking.pageView({
    path: window.location.pathname,
  });
}
