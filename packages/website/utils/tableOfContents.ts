import slugger from 'github-slugger';

export interface HeadingType {
  level: 'h2' | 'h3';
  text: string;
  id: string;
}

//see https://github.com/hashicorp/next-mdx-remote/issues/53#issuecomment-725906664
export function getToCFromMdx(mdxContent: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');

  const headings = [...mdxContent.matchAll(regexp)];
  let tableOfContents: HeadingType[] = [];

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
      const headingLink = slugger.slug(headingText, false);

      return {
        text: headingText,
        id: headingLink,
        level: headingType,
      };
    });
  }

  return tableOfContents;
}

interface ContentfulNode {
  nodeType: string;
  content: Array<{ value: string }>;
}

export function getToCFromContentful(content: ContentfulNode[]) {
  let tableOfContents: HeadingType[] = [];

  const headings = content.filter((node) => node.nodeType.includes('heading'));

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingType = heading.nodeType === 'heading-2' ? 'h2' : 'h3';
      const headingText = heading.content[0].value;
      const headingLink = slugger.slug(headingText, false);

      return {
        text: headingText,
        id: headingLink,
        level: headingType,
      };
    });
  }

  return tableOfContents;
}
