import { describe, expect, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ModalDisplayHeader } from './ModalDisplayHeader';

// Context logic (ids, onClose, closeIconLabel) is owned by useModalHeader.test;
// name/description linking inside a Modal by ModalDisplay.test.

describe('markup', () => {
  it('renders the title as h2 and the subtitle as p inside an hgroup', () => {
    render(<ModalDisplayHeader title="Display title" subtitle="Sub" />);
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Display title',
    });
    const subtitle = screen.getByText('Sub');
    expect(subtitle.tagName).toBe('P');
    expect(heading.parentElement?.tagName).toBe('HGROUP');
    expect(heading.parentElement).toContainElement(subtitle);
  });
});

describe('standalone (no Modal context)', () => {
  it('renders without close button and without a11y issues', async () => {
    const { container } = render(
      <ModalDisplayHeader title="Standalone" subtitle="Sub" />,
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    await expectNoA11yViolations(container);
  });
});
