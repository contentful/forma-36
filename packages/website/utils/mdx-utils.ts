import slugger from 'github-slugger';

//see https://github.com/hashicorp/next-mdx-remote/issues/53#issuecomment-725906664
export function getTableOfContents(mdxContent: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');

  const headings = [...mdxContent.matchAll(regexp)];
  let tableOfContents = [];

  if (headings.length) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
