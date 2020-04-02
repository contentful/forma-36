import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

module.exports = axe;
