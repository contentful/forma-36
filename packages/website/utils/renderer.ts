import createEmotionServer from 'create-emotion-server';
import { cache } from 'emotion';

export const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
