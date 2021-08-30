import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { Accordion } from '../src';

jest.mock('@contentful/f36-core', () => ({
  ...jest.requireActual('@contentful/f36-core'),
  useId: () => {
    return 'id';
  },
}));

describe('Accordion', () => {
  it('opens the accordion panel when the header is clicked', () => {
    render(
      <Accordion>
        <Accordion.Item title="Accordion Title">
          Accordion content
        </Accordion.Item>
      </Accordion>,
    );

    const panel = screen.getByLabelText('Accordion Title');

    expect(panel.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByText('Accordion Title'));
    expect(panel.getAttribute('aria-hidden')).toBe('false');
  });

  it('calls onExpand && onCollapse when an accordion item is expanded and collapsed', () => {
    const onExpand = jest.fn();
    const onCollapse = jest.fn();
    render(
      <Accordion>
        <Accordion.Item
          title="Accordion Title"
          onExpand={onExpand}
          onCollapse={onCollapse}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>,
    );

    userEvent.click(screen.getByText('Accordion Title'));
    expect(onExpand).toHaveBeenCalledTimes(1);
    expect(onCollapse).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByText('Accordion Title'));
    expect(onExpand).toHaveBeenCalledTimes(1);
    expect(onCollapse).toHaveBeenCalledTimes(1);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Accordion>
        <Accordion.Item title="Accordion Title">
          Accordion content
        </Accordion.Item>
      </Accordion>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
