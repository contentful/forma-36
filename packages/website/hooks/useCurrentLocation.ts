import { useRouter } from 'next/router';

export const useCurrentLocation = () => {
  const { asPath } = useRouter();
  const [pathWithoutQueryString] = asPath.split('?');
  const currentSection = pathWithoutQueryString.split('/')[1];
  const currentPage = pathWithoutQueryString.split('/').pop();

  return { currentPage, currentSection };
};
