import axe from 'axe-core';

axe.configure({
  rules: axe
    .getRules(['cat.color'])
    .map(({ ruleId }) => ({ id: ruleId, enabled: false })),
});

export async function expectNoA11yViolations(
  container: Element,
  options: axe.RunOptions = {},
) {
  const results = await axe.run(container, {
    ...options,
    rules: {
      region: { enabled: false },
      ...options.rules,
    },
  });

  expect(results.violations).toEqual([]);
}
