const warned = new Set<string>();

export interface WarnDeprecatedOptions {
  /** Component name, used as message prefix and to scope deduplication */
  component: string;
  /** Deprecated prop (or API) name; omit when the whole component is deprecated */
  prop?: string;
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
  const key = prop ? `${component}.${prop}` : component;
  if (process.env.NODE_ENV !== 'development' || warned.has(key)) return;
  warned.add(key);
  const subject = prop ? `[${component}] \`${prop}\`` : `\`${component}\``;
  // eslint-disable-next-line no-console
  console.warn(
    `${subject} is deprecated and will be removed in the next major version. ${hint}` +
      (migrationGuide ? ` See: ${migrationGuide}` : ''),
  );
};
