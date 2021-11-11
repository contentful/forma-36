import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { remark } from 'remark';
import html from 'remark-html';

import * as f36Components from '@contentful/f36-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { geltAllMDX, getPageBySlug } from '../../utils/content';

export default function ComponentPage(props: {
  data: any;
  content: string;
  previews: string[];
  slug: string;
}) {
  console.log('ComponentPage: ', props);

  const router = useRouter();
  if (!router.isFallback && !props.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{props.data.title}</h1>

      {props.previews &&
        props.previews.map((preview, idx) => (
          <LiveProvider
            key={idx}
            scope={{ ...f36Components }}
            code={transformCode(preview)}
            language="tsx"
          >
            <f36Components.Box padding="spacingM">
              <LivePreview />
            </f36Components.Box>
            <LiveEditor />
            <LiveError />
          </LiveProvider>
        ))}

      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

function transformCode(code: string) {
  const transformedCode = code
    .replace(/import.+/g, '')
    .replace(/export\s/g, '')
    .trim();

  return transformedCode;
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
  const pages = await geltAllMDX();

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
