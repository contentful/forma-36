const handleConsent = (newConsentOptions) => {
  // Save consent in localStorage for later
  window.localStorage.setItem('consent', JSON.stringify(newConsentOptions));

  // TODO: handle initialization of any analytics service here
};

const initOsano = () => {
  const osanoScriptUrl = `https://cmp.osano.com/${process.env.OSANO_KEY}/${process.env.OSANO_F36_WEBSITE_KEY}/osano.js`;
  const script = document.createElement('script');
  const head = document.getElementsByTagName('head')[0];

  script.src = osanoScriptUrl;
  script.async = true;

  script.addEventListener('error', () => {
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
};

export const onClientEntry = () => {
  if (process.env.OSANO_KEY && process.env.OSANO_F36_WEBSITE_KEY) {
    initOsano();
  } else {
    console.warn('Analytics services won’t initialize');
  }
};
