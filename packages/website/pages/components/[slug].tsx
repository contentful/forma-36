import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { remark } from 'remark';
import html from 'remark-html';

// import { Stack, Button } from '@contentful/f36-components';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { geltAllSlugs, getPageBySlug } from '../../utils/content';

export default function ComponentPage(props: any) {
  console.log('ComponentPage: ', props);

  const router = useRouter();
  if (!router.isFallback && !props.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{props.data.title}</h1>

      {/* {props.previews && (
        <LiveProvider scope={{ Stack, Button }} code={props.previews[0]}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      )} */}

      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);

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
  const pages = await geltAllSlugs();

  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
