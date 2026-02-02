import React, { useEffect } from 'react';

import { TextInput } from '@contentful/f36-components';
import { MagnifyingGlassIcon } from '@contentful/f36-icons';

export const DocSearch = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore ignore a complaint about dynamic import
    import('docsearch.js').then((docsearch) => {
      try {
        docsearch.default({
          // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
          // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/v5/configs/contentful_forma-36.json
          appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID || '',
          apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY || '',
          indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME || '',
          inputSelector: '#search',
          handleSelected: (_input, _event, suggestion) => {
            if (process.env.NODE_ENV !== 'production') {
              const path = suggestion.url.replace(/.*\.com/, '');
              window.location.assign(`${window.location.origin}${path}`);
            } else {
              window.location.assign(suggestion.url);
            }
          },
        });
      } catch (e) {
        // eslint-disable-next-line no-console -- Allow this error
        console.error('Failed to initialize Algolia search', e);
      }
    });
  }, []);

  return (
    <TextInput
      id="search"
      icon={<MagnifyingGlassIcon />}
      name="search"
      type="text"
      placeholder="Search the docs"
    />
  );
};
