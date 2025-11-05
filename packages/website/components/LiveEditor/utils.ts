export const formatSourceCode = (source: string) => {
  const result = source
    // remove imports and exports
    .replace(
      /(import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|))|(export\s(default\s)?)/g,
      '',
    )
    .trim();

  return result;
};
