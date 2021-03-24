import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import createEmotionServer from 'create-emotion-server';
import { renderToString } from 'react-dom/server';

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};

const { extractCritical } = createEmotionServer(cache);

export const replaceRenderer = ({ bodyComponent, setHeadComponents }) => {
  const { css, ids } = extractCritical(renderToString(bodyComponent));

  setHeadComponents([
    <style
      key="app-styles"
      data-emotion={`css ${ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: css }}
    />,
  ]);
};
