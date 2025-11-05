import { HARDCODED_WEBSITE_SECTION, SidebarSection } from '../types';

const ARTICLE_GRAPHQL_FIELDS = `
sys {
  id
}
title
subtitle
slug
metaDescription
authProtected
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

    assets {
      block {
        sys {
          id
        }
        url
        description
        width
        height
      }
    }
  }
}
linkedFrom {
  sectionCollection(limit: 1) {
    items {
      sys {
        id
      }
      slug
    }
  }
  kbAppCategoryCollection(limit: 1) {
    items {
      linkedFrom {
        sectionCollection(limit: 1) {
          items {
            sys {
              id
            }
            slug
          }
        }
      }
    }
  }
}
`;
// kbAppCategory {
//   sys {
//     id
//   }
//   name
//   slug
//   previewDescription
// }

const LINKS_COLLECTION_GRAPHQL_FIELDS = `
... on KbAppLink {
  sys {
    id
  }
  slug: url
  title: text
  type: __typename
}
... on KbAppArticle {
  sys {
    id
  }
  title
  slug
  authProtected
  type: __typename
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
    `https://graphql.contentful.com/content/v1/spaces/${
      process.env.CONTENTFUL_SPACE_ID
    }/environments/${process.env.CONTENTFUL_SPACE_ENVIRONMENT || 'master'}`,
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
  try {
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

    return articleEntries;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return [];
  }
}

export async function getSidebarLinksBySectionSlug(
  sectionSlug: string,
  preview = false,
) {
  let data;

  try {
    const entries = await fetchGraphQL(
      `query {
      sectionCollection(
        where: { slug_exists: true, slug: "${sectionSlug}" }
        limit: 1
      ) {
        items {
          slug
          title
          sys {
            id
          }
          linksCollection {
            items {
              ${LINKS_COLLECTION_GRAPHQL_FIELDS}
            }
          }
          categoriesCollection {
            items {
              sys {
                id
              }
              slug
              name
              type: __typename
              linksCollection {
                items {
                  ${LINKS_COLLECTION_GRAPHQL_FIELDS}
                }
              }
            }
          }
        }
      }
    }
    `,
      preview,
    );

    data = entries?.data?.sectionCollection?.items[0];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    // noop
  }

  const prepareLink = (link: { slug: string; authProtected?: boolean }) => {
    // Changelog link is a special case because we don't want to prepend the section slug
    if (link.slug === HARDCODED_WEBSITE_SECTION.WHATS_NEW) {
      return { ...link, slug: `/${link.slug}` };
    }

    let slug = link.slug.startsWith('http')
      ? link.slug
      : `/${sectionSlug}/${link.slug}`;

    if (link.authProtected) {
      slug = `/${sectionSlug}/protected/${link.slug}`;
    }

    return {
      ...link,
      slug,
    };
  };

  if (data) {
    let sidebarLinks: SidebarSection[] = [];
    const links = data.linksCollection?.items.map(prepareLink);

    if (links.length) {
      sidebarLinks = [
        {
          links,
        },
      ];
    }

    const categories = data.categoriesCollection?.items.reduce(
      (categories, item) => {
        const category = {
          links: [],
          slug: `/${sectionSlug}`,
          title: item.name,
          authProtected: false,
        };

        category.links = item.linksCollection?.items.map(prepareLink);

        category.authProtected = category.links.every(
          (link: { authProtected?: boolean }) => link.authProtected,
        );

        if (category.links.length > 0) {
          categories.push(category);
        }

        return categories;
      },
      [],
    );
    sidebarLinks = [...sidebarLinks, ...categories];

    return sidebarLinks;
  }
}

export async function getTopbarLinks(preview = false) {
  try {
    const entries = await fetchGraphQL(
      `query {
        navigationCollection(limit:1) {
          items {
            sys {
              id
            }
            sectionsCollection {
              items {
                sys {
                  id
                }
                title
                slug
                initialLink
              }
            }
          }
        }
      }`,
      preview,
    );

    const topbarLinks =
      entries?.data?.navigationCollection?.items[0].sectionsCollection?.items;

    return topbarLinks;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return [];
  }
}
