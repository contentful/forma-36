export interface MatchObj {
  before: string;
  match: string;
  after: string;
}

/**
 * Function that can be used to find a substring inside another string.
 * It needs two strings, the second one will be used in a Regex expression
 * to be matched to the first one.
 * The function will return an object containing the match, what comes before the match,
 * and what comes after the match in the base string
 *
 * @param base
 * @param match
 */
export function getStringMatch(base: string, match: string): MatchObj {
  const matchResult = { before: '', match: '', after: '' };
  const escapedMatch = match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const regex = new RegExp(
    `(?<before>.*?)(?<match>${escapedMatch})(?<after>.*)`,
    'i',
  );
  const matches = base.match(regex);

  if (matches) {
    matchResult.before = matches.groups.before;
    matchResult.match = matches.groups.match;
    matchResult.after = matches.groups.after;
  }

  return matchResult;
}
