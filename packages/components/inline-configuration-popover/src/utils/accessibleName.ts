/**
 * Verbs that say what happens, but not to what. A list of rows that all read
 * "Edit, Edit, Set" is not usable with a screen reader. Nouns such as
 * "Settings" aren't listed: a single page-level "Settings" button is fine.
 * Repeated names are caught separately.
 */
const GENERIC_NAMES = new Set([
  'set',
  'edit',
  'override',
  'open',
  'configure',
  'change',
  'more',
  'toggle',
]);

/**
 * Approximates the accessible name of an element: aria-labelledby,
 * aria-label, then its text (including visually hidden text).
 */
function getAccessibleName(element: HTMLElement) {
  const labelledBy = element.getAttribute('aria-labelledby');

  if (labelledBy) {
    const name = labelledBy
      .split(/\s+/)
      .map((id) => element.ownerDocument.getElementById(id)?.textContent ?? '')
      .join(' ')
      .trim();

    if (name) {
      return name;
    }
  }

  const label = element.getAttribute('aria-label')?.trim();

  if (label) {
    return label;
  }

  return (element.textContent || element.getAttribute('title') || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(name: string) {
  return name
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isGenericName(name: string) {
  return GENERIC_NAMES.has(normalize(name));
}

const warnedNames = new Set<string>();
const warnedDuplicates = new Set<string>();
const mountedTriggers = new Set<HTMLElement>();

/**
 * Registers a mounted trigger so that triggers with the same name can be
 * found. Returns the cleanup.
 */
export function registerTrigger(element: HTMLElement | null) {
  if (process.env.NODE_ENV === 'production' || !element) {
    return undefined;
  }
  mountedTriggers.add(element);
  return () => {
    mountedTriggers.delete(element);
  };
}

/**
 * Development-only warnings for a trigger that has no name, has only a
 * generic verb as its name, or has the same name as another trigger on the
 * page.
 */
export function warnAboutTriggerName(element: HTMLElement | null) {
  if (process.env.NODE_ENV === 'production' || !element) {
    return;
  }

  const name = getAccessibleName(element);
  const normalized = normalize(name);

  if (
    normalized &&
    !warnedDuplicates.has(normalized) &&
    Array.from(mountedTriggers).some(
      (other) =>
        other !== element &&
        other.isConnected &&
        normalize(getAccessibleName(other)) === normalized,
    )
  ) {
    warnedDuplicates.add(normalized);
    // eslint-disable-next-line no-console
    console.warn(
      `InlineConfigurationPopover.Trigger: more than one trigger is named "${name}". ` +
        "Screen reader users can't tell them apart. Add the item to each " +
        'name, for example aria-label="Edit parameter Blog post".',
    );
  }

  const key = name || '<empty>';

  if (warnedNames.has(key)) {
    return;
  }

  if (!name) {
    warnedNames.add(key);
    // eslint-disable-next-line no-console
    console.warn(
      'InlineConfigurationPopover.Trigger: the trigger has no accessible name. ' +
        'Give it a name that says what it opens, for example ' +
        'aria-label="Edit parameter Blog post".',
    );
    return;
  }

  if (isGenericName(name)) {
    warnedNames.add(key);
    // eslint-disable-next-line no-console
    console.warn(
      `InlineConfigurationPopover.Trigger: the accessible name "${name}" doesn't say ` +
        'which item it opens. Start the name with the visible text and add ' +
        `the item, for example aria-label="${name} parameter Blog post".`,
    );
    return;
  }

  // Voice control users say the visible text ("click Set"), so the name must
  // start with it (WCAG 2.5.3, Label in Name)
  const visibleText = (element.textContent ?? '').replace(/\s+/g, ' ').trim();
  const mismatchKey = `${name}\u0000${visibleText}`;

  if (
    visibleText &&
    !normalize(name).startsWith(normalize(visibleText)) &&
    !warnedNames.has(mismatchKey)
  ) {
    warnedNames.add(mismatchKey);
    // eslint-disable-next-line no-console
    console.warn(
      `InlineConfigurationPopover.Trigger: the accessible name "${name}" doesn't start ` +
        `with the visible text "${visibleText}". Start the name with it, for ` +
        `example aria-label="${visibleText} parameter Blog post".`,
    );
  }
}

/**
 * Forgets which names were reported, so tests don't depend on their order.
 * Only for tests.
 */
export function resetTriggerNameWarnings() {
  warnedNames.clear();
  warnedDuplicates.clear();
}
