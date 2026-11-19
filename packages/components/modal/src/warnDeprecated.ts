const MIGRATION_GUIDE =
  'https://github.com/contentful/forma-36/blob/main/packages/components/modal/MIGRATION.md';

const warned = new Set<string>();

/**
 * Dev-only deprecation warning, printed once per prop and session
 * so call sites that render often don't flood the console.
 */
export const warnDeprecated = (prop: string, replacement: string) => {
  if (process.env.NODE_ENV !== 'development' || warned.has(prop)) return;
  warned.add(prop);
  // eslint-disable-next-line no-console
  console.warn(
    `[Modal] \`${prop}\` is deprecated and will be removed in the next major version. ` +
      `${replacement} See: ${MIGRATION_GUIDE}`,
  );
};
