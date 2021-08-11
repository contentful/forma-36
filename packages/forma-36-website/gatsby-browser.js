import { createTracking } from '@contentful/experience-tracking';
import * as events from './src/analytics/generated';

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
 * @param {object} newConsentOptions
 */
function handleConsent(newConsentOptions) {
  const previousConsent = window.localStorage.getItem('consent');
  const consentOptionsChanged =
    JSON.stringify(newConsentOptions) !== previousConsent;

  if (consentOptionsChanged) {
    // Save consent in localStorage for later
    window.localStorage.setItem('consent', JSON.stringify(newConsentOptions));
  }

  const consent = {
    analytics: newConsentOptions.ANALYTICS === 'ACCEPT',
    personalization: newConsentOptions.PERSONALIZATION === 'ACCEPT',
    marketing: newConsentOptions.MARKETING === 'ACCEPT',
  };

  if (consent.analytics && !window.tracking) {
    initSegment(consent);
  }

  // If ANALYTICS was changed to "DENY"
  // we need to reload the page to remove segment
  if (
    JSON.parse(previousConsent).ANALYTICS === 'ACCEPT' &&
    !consent.analytics
  ) {
    window.location.reload();
  }
}

/**
 * Funtion that will set up Segment, initialize its client
 * and save it to the window object to make it available for the rest of the application
 *
 * @param {object} consent - object that will be used in segmentClient.initialize()
 */
function initSegment(consent) {
  // initialize Segment client
  const segmentClient = createTracking({
    segment: {
      key: SEGMENT_KEY,
      plan: events,
    },
  });

  segmentClient.initialize('userId', {
    consent,
    integrations: ['Google Analytics'],
  });

  // save segmentClient in the window
  // to be used for tracking in the rest of the application
  window.tracking = segmentClient;
}
