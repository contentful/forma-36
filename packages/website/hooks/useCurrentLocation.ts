import { useRouter } from 'next/router';

export const useCurrentLocation = () => {
  const { asPath } = useRouter();
  const [pathWithoutQueryString] = asPath.split('?');
  const [, currentSection, currentPage] = pathWithoutQueryString.split('/');

  return { currentPage, currentSection };
};
