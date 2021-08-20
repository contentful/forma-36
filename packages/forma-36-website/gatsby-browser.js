const OSANO_KEY = process.env.GATSBY_OSANO_KEY;
const OSANO_F36_WEBSITE_KEY = process.env.GATSBY_OSANO_F36_WEBSITE_KEY;

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
  if (consent.analytics && !window.analytics) {
    initSegment();
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
 * Function to append Segment’ script to the head of the website and track the first page view
 */
function initSegment() {
  // We need to do this hack otherwise tracking events from our preview websites will be dispatched to the production Segment
  const context = process.env.CONTEXT;
  const SEGMENT_KEY =
    context === 'deploy-preview' || context === 'branch-deploy'
      ? process.env.GATSBY_SEGMENT_STAGGING_KEY
      : process.env.GATSBY_SEGMENT_KEY;

  const segmentSnippet = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${SEGMENT_KEY}";analytics.SNIPPET_VERSION="4.13.2";}}();`;

  const script = document.createElement('script');
  script.addEventListener('error', () => {
    // eslint-disable-next-line no-console
    console.error('Segment script error');
  });
  script.innerHTML = segmentSnippet;
  script.async = true;
  document.getElementsByTagName('head')[0].appendChild(script);

  if (typeof window.analytics.load === 'function') {
    window.analytics.load(SEGMENT_KEY, {
      integrations: {
        all: false,
        'Google Analytics': true,
        'Segment.io': true,
      },
    });
  }

  // tracks the first page view
  window.analytics.page();
}
