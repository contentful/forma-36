export const types = {
  archive: 'archive',
  audio: 'audio',
  code: 'code',
  image: 'image',
  markup: 'markup',
  pdf: 'pdf',
  plaintext: 'plaintext',
  presentation: 'presentation',
  richtext: 'richtext',
  spreadsheet: 'spreadsheet',
  video: 'video',
};

export function isAssetType(type: string): type is AssetType {
  return Object.keys(types).includes(type);
}

export type AssetType = keyof typeof types;
