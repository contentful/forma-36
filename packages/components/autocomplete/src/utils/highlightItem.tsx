import React from 'react';

export function highlightStringItem(item: string, inputValue: string) {
  if (!inputValue) {
    return item;
  }

  const regex = new RegExp(
    `(?<before>.*?)(?<match>${inputValue})(?<after>.*)`,
    'i',
  );
  const matches = item.match(regex);
  if (!matches) return item;

  const {
    groups: { before, match, after },
  } = matches;
  return (
    <>
      {before}
      <b>{match}</b>
      {after}
    </>
  );
}
