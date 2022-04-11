import { useRouter } from 'next/router';

export enum WEBSITE_SECTION {
  HOMEPAGE = 'HOMEPAGE',
  INTRODUCTION = 'INTRODUCTION',
  GUIDELINES = 'GUIDELINES',
  TOKENS = 'TOKENS',
  COMPONENTS = 'COMPONENTS',
  PLAYGROUND = 'PLAYGROUND',
}

export const useCurrentLocation = () => {
  const { asPath: currentPage } = useRouter();

  // Since there are more pages in the Components' section,
  // let's try to match the currentPage with it first so we can return early most of the time
  const isComponents =
    currentPage.includes('/components') ||
    currentPage.includes('/deprecated-components') ||
    currentPage.includes('/utils') ||
    currentPage.includes('/integrations');

  if (isComponents) {
    return { activeSection: WEBSITE_SECTION.COMPONENTS, currentPage };
  }

  const isGuidelines = currentPage.includes('/guidelines');

  if (isGuidelines) {
    return { activeSection: WEBSITE_SECTION.GUIDELINES, currentPage };
  }

  const isTokens = currentPage.includes('/tokens');

  if (isTokens) {
    return { activeSection: WEBSITE_SECTION.TOKENS, currentPage };
  }

  const isPlayground = currentPage.includes('/playground');

  if (isPlayground) {
    return { activeSection: WEBSITE_SECTION.PLAYGROUND, currentPage };
  }

  if (currentPage === '/') {
    return { activeSection: WEBSITE_SECTION.HOMEPAGE, currentPage };
  }

  return { activeSection: WEBSITE_SECTION.INTRODUCTION, currentPage };
};
