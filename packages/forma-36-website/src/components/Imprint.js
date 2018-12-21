import React from 'react';
import './Imprint.css';

const Imprint = () => (
  <div className="imprint f36-margin-bottom--m">
    <a
      href="https://www.contentful.com/legal/de"
      className="f36-margin-right--s f36-font-family--sans-serif f36-color--white"
    >
      Imprint / Legal
    </a>
    <a
      href="https://www.contentful.com/legal/de/privacy/"
      className=" f36-margin-right--s f36-font-family--sans-serif f36-color--white"
      linkType="muted"
    >
      Privacy
    </a>
    <a
      href="https://www.contentful.com/security/"
      className="f36-font-family--sans-serif f36-color--white"
      linkType="muted"
    >
      Security
    </a>
  </div>
);
export default Imprint;
