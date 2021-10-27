import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// import Container from '../../components/container';
// import PostBody from '../../components/post-body';
// import Header from '../../components/header';
// import PostHeader from '../../components/post-header';
// import Layout from '../../components/layout';
// import { getPostBySlug, getAllPosts } from '../../lib/api';
// import PostTitle from '../../components/post-title';
import Head from 'next/head';
// import { CMS_NAME } from '../../lib/constants';
// import markdownToHtml from '../../lib/markdownToHtml';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

export default function Post(props: any) {
  console.log(props);
  const router = useRouter();
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </div>
  );
  // return (
  //   <Layout preview={preview}>
  //     <Container>
  //       <Header />
  //       {router.isFallback ? (
  //         <PostTitle>Loading…</PostTitle>
  //       ) : (
  //         <>
  //           <article className="mb-32">
  //             <Head>
  //               <title>
  //                 {post.title} | Next.js Blog Example with {CMS_NAME}
  //               </title>
  //               <meta property="og:image" content={post.ogImage.url} />
  //             </Head>
  //             <PostHeader
  //               title={post.title}
  //               coverImage={post.coverImage}
  //               date={post.date}
  //               author={post.author}
  //             />
  //             <PostBody content={post.content} />
  //           </article>
  //         </>
  //       )}
  //     </Container>
  //   </Layout>
  // );
}

const postsDirectory = path.join(process.cwd(), 'pages/_posts');
const forma36Dir = path.resolve('../../packages/components/button');

function getPostSlugs() {
  // console.log(process.cwd());
  // console.log({ postsDirectory, forma36Dir });
  return fs.readdirSync(forma36Dir).filter((slug) => slug.match(/(.mdx)$/));
}

function getPostBySlug(slug: string, fields: string[] = []) {
  console.log('getPostBySlug >>>');
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(forma36Dir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

function getAllPosts(fields: string[] = []) {
  console.log('getStaticPaths >>>');
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  console.log({ posts });
  return posts;
}

export async function getStaticProps({ params }: { params: any }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  console.log({ post });
  const result = await remark()
    .use(html)
    .process(post.content || '');
  const content = result.toString(); //await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
