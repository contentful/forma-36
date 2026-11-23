const warned = new Set<string>();

export interface WarnDeprecatedOptions {
  /** Component name, used as message prefix and to scope deduplication */
  component: string;
  /** Deprecated prop (or API) name */
  prop: string;
  /** What to use instead */
  hint: string;
  /** Link to the migration guide */
  migrationGuide?: string;
}

/**
 * Dev-only deprecation warning, printed once per component prop and session
 * so call sites that render often don't flood the console.
 */
export const warnDeprecated = ({
  component,
  prop,
  hint,
  migrationGuide,
}: WarnDeprecatedOptions) => {
  const key = `${component}.${prop}`;
  if (process.env.NODE_ENV !== 'development' || warned.has(key)) return;
  warned.add(key);
  // eslint-disable-next-line no-console
  console.warn(
    `[${component}] \`${prop}\` is deprecated and will be removed in the next major version. ${hint}` +
      (migrationGuide ? ` See: ${migrationGuide}` : ''),
  );
};
