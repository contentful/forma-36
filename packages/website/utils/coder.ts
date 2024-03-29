import lzString from 'lz-string';

const compressParams = (params: { code: string }) => {
  const { code } = params;
  const data = JSON.stringify({
    ...(code ? { code } : {}),
  });

  return lzString.compressToEncodedURIComponent(data);
};

export function decode(input: string) {
  const result = JSON.parse(
    lzString.decompressFromEncodedURIComponent(input) ?? '',
  );
  return result.code ?? '';
}

export function encode(input: string) {
  if (input.length === 0) return '';

  return compressParams({ code: input });
}
