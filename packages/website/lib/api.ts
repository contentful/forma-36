import fs from 'fs';

const ARTICLE_GRAPHQL_FIELDS = `
sys {
  id
}
title
subtitle
slug
metaDescription
body {
  json
  links {
    entries {
      block {
        sys {
          id
        }
        __typename
        ... on CodeBlock {
          name
          code
        }
      }
    }
  }
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
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
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

export async function getSingleArticleBySlug(slug, preview = false) {
  const entry = await fetchGraphQL(
    `query {
      kbAppArticleCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
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

  const articleEntries = extractArticleEntries(entries);

  const sidebarLinks = articleEntries
    .sort((a, b) => (a.title < b.title ? -1 : 1))
    .reduce((acc, path) => {
      const category = path.kbAppCategory?.slug ?? 'unassigned';

      const item = {
        title: path.title,
        slug: `/${path.kbAppCategory.slug}/${path.slug}`,
      };

      if (acc[category]) {
        return { ...acc, [category]: [...acc[category], item] };
      }

      return { ...acc, [category]: [item] };
    }, {});

  // create a JSON file with sidebar links for pages that come from Contentful
  const data = JSON.stringify(sidebarLinks, null, 2);
  fs.writeFileSync('utils/contentfulSidebarLinks.json', data);

  return articleEntries;
}
