import { afterEach, describe, expect, it } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ModalDisplay, type ModalDisplayProps } from './ModalDisplay';

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

const renderDisplay = (props: Partial<ModalDisplayProps> = {}) =>
  render(
    <ModalDisplay
      isShown
      onClose={() => {}}
      title="Display title"
      subtitle="Display subtitle"
      illustration={<svg aria-hidden="true" />}
      controls={<button type="button">Confirm</button>}
      {...props}
    >
      Body content
    </ModalDisplay>,
  );

describe('accessibility', () => {
  it('has no a11y issues', async () => {
    const { baseElement } = renderDisplay();
    await expectNoA11yViolations(baseElement);
  });

  it('labels the dialog by title and describes it by subtitle', () => {
    renderDisplay();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Display title');
    expect(dialog).toHaveAccessibleDescription('Display subtitle');
  });
});

describe('layout', () => {
  it('renders children in content and controls in controls', () => {
    renderDisplay();
    expect(screen.getByTestId('cf-ui-modal-content')).toHaveTextContent(
      'Body content',
    );
    expect(screen.getByTestId('cf-ui-modal-controls')).toContainElement(
      screen.getByRole('button', { name: 'Confirm' }),
    );
  });
});
