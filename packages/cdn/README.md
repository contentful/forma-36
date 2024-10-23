# Forma36 CDN

The `public` folder is hosted at `cdn.f36.contentful.com`.

## Development

Run `npm run serve` to start the server locally

## Updating the Geist font to the latest version

> [!IMPORTANT]  
> Do not remove, rename or overwrite old versions of the font.

1. Download the font files from https://github.com/vercel/geist-font/releases
1. Copy the mono and sans font files to `public/fonts`. The font files must be the variable font in woff2 format.
1. Rename the files to include the version: `geist-(mono|sans)-x.x.x.woff2`
1. Create a PR and wait for review
1. Merge the PR. The files are automatically deployed to the CDN
