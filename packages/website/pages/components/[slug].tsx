import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { remark } from 'remark';
import html from 'remark-html';

import { getAllPages, getPageBySlug } from '../../utils/content';

export default function ComponentPage(props: any) {
  console.log('ComponentPage: ', props);

  const router = useRouter();
  if (!router.isFallback && !props.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{props.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log('getStaticProps >>>>>');
  const page = getPageBySlug(params.slug);
  console.log(page);
  const result = await remark()
    .use(html)
    .process(page.content || '');
  const content = result.toString();

  return {
    props: {
      ...page,
      content,
    },
  };
}

export async function getStaticPaths() {
  const pages = getAllPages();
  console.log('getStaticPaths >>>', pages);
  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
}
