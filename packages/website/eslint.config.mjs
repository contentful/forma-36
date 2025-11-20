import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import rootConfig from "../../eslint.config.mjs";

// FlatCompat is only needed to pull in legacy-style configs (e.g. Next.js plugin rules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

// Compose: start with root flat config, then legacy Next.js recommended, then website-specific overrides
export default [
  ...rootConfig,
  ...compat.extends("plugin:@next/next/recommended"),
  {
    rules: {
      "rulesdir/emotion-in-function": "off",
      "jsx-a11y/anchor-is-valid": "off",
    },
  },
  {
    files: ["pages/**/*", "content/**/*"],
    rules: { "import/no-default-export": "off" },
  },
];