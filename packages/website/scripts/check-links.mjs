import { fileURLToPath } from 'node:url';

import brokenLinkChecker from 'broken-link-checker';

const { SiteChecker } = brokenLinkChecker;

const DEFAULT_URL = 'http://localhost:3000';
const EXCLUDED_KEYWORDS = [
  'https://medium.com/contentful-design',
  'https://github.com/contentful/forma-36',
  'https://www.figma.com/@contentful',
  'https://react-hook-form.com',
  'https://emotion.sh',
];

function isContentfulHost(hostname) {
  return hostname === 'contentful.com' || hostname.endsWith('.contentful.com');
}

function getResponseUrl(result) {
  return (
    result.http?.response?.url ||
    result.url?.redirected ||
    result.url?.resolved ||
    result.url?.original
  );
}

function shouldIgnoreRateLimit(result) {
  if (result.broken !== true || result.http?.response?.statusCode !== 429) {
    return false;
  }

  try {
    return isContentfulHost(new URL(getResponseUrl(result)).hostname);
  } catch {
    return false;
  }
}

function formatResult(result) {
  return `${getResponseUrl(result)} (${result.brokenReason})`;
}

function writeOutput(stream, message) {
  process[stream].write(`${message}\n`);
}

export function run(url = DEFAULT_URL) {
  let brokenLinks = 0;

  const checker = new SiteChecker(
    {
      excludedKeywords: EXCLUDED_KEYWORDS,
    },
    {
      link(result) {
        if (shouldIgnoreRateLimit(result)) {
          writeOutput(
            'stdout',
            `Ignoring rate-limited Contentful link: ${formatResult(result)}`,
          );
          return;
        }

        if (result.broken === true) {
          brokenLinks += 1;
          writeOutput('stderr', `Broken link: ${formatResult(result)}`);
        }
      },
      page(error, pageUrl) {
        if (error != null) {
          brokenLinks += 1;
          writeOutput('stderr', `Unable to scan ${pageUrl}: ${error.message}`);
        }
      },
      end() {
        process.exitCode = brokenLinks === 0 ? 0 : 1;
      },
    },
  );

  checker.enqueue(url);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run(process.argv[2]);
}

export { isContentfulHost, shouldIgnoreRateLimit };
