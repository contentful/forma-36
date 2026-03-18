import { extractCritical } from '@emotion/server';

export const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
