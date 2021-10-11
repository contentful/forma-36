export function getMatch(item: string, inputValue: string) {
  const matchResult = { before: '', match: '', after: '' };

  const regex = new RegExp(
    `(?<before>.*?)(?<match>${inputValue})(?<after>.*)`,
    'i',
  );
  const matches = item.match(regex);

  if (matches) {
    matchResult.before = matches.groups.before;
    matchResult.match = matches.groups.match;
    matchResult.after = matches.groups.after;
  }

  return matchResult;
}
