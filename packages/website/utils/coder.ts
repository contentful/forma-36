const btoa =
  typeof window === 'undefined'
    ? (str: string) => Buffer.from(str, 'binary').toString('base64')
    : window.btoa;

const atob =
  typeof window === 'undefined'
    ? (str: string) => Buffer.from(str, 'base64').toString('binary')
    : window.atob;

export function decode(input: string) {
  return decodeURIComponent(
    atob(input)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
}

export function encode(input: string) {
  if (input.length === 0) return '';

  return btoa(
    encodeURIComponent(input).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        // @ts-expect-error mute
        return String.fromCharCode('0x' + p1);
      },
    ),
  );
}
