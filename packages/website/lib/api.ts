const ARTICLE_GRAPHQL_FIELDS = `
sys {
  id
}
title
slug
metaDescription
body {
  json
}
kbAppCategory {
  sys {
    id
  }
  name
  slug
  previewDescription
}
`;

/**
 *
 * @param query - the GraphQL query to be used by the API
 * @param preview - if true, it tells the app to request the content from preview API
 * @returns
 */
async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

function extractArticle(fetchResponse) {
  return fetchResponse?.data?.kbAppArticleCollection?.items?.[0];
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.kbAppArticleCollection?.items;
}

export async function getSingleArticleBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      kbAppArticleCollection(where: { slug: "${slug}" }, preview: false, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractArticle(entry);
}

export async function getAllArticles(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      kbAppArticleCollection(where: { slug_exists: true }) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractArticleEntries(entries);
}
