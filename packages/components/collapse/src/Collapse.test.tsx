import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Collapse } from './Collapse';
import userEvent from '@testing-library/user-event';

it('has no a11y issues', async () => {
  const { container } = render(<Collapse isExpanded>Collapse me </Collapse>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

describe('Collapse behavior', () => {
  const originalRAF = global.requestAnimationFrame;

  beforeEach(() => {
    // Execute rAF callbacks synchronously for deterministic tests
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).requestAnimationFrame = (cb: FrameRequestCallback) => {
      cb(performance.now());
      return 0;
    };
  });

  afterEach(() => {
    global.requestAnimationFrame = originalRAF;
  });

  function setMockScrollHeight(el: HTMLElement, value: number) {
    Object.defineProperty(el, 'scrollHeight', {
      configurable: true,
      get: () => value,
    });
  }

  it('is collapsed by default (display: none, aria-hidden=true)', () => {
    const { getByTestId } = render(
      <Collapse isExpanded={false}>Content</Collapse>,
    );
    const panel = getByTestId('cf-collapse');
    expect(panel).toHaveAttribute('aria-hidden', 'true');
    expect(panel.style.display).toBe('none');
  });

  it('mounts expanded sets height auto immediately', () => {
    const { getByTestId } = render(<Collapse isExpanded>Content</Collapse>);
    const panel = getByTestId('cf-collapse');
    // handleTransitionEnd runs on first mount; expanded sets height auto
    expect(panel).toHaveAttribute('aria-hidden', 'false');
    expect(panel.style.height).toBe('auto');
  });

  it('expands from collapsed: transitions height then sets auto after transitionend', () => {
    const { getByTestId, rerender } = render(
      <Collapse isExpanded={false}>Content</Collapse>,
    );
    const panel = getByTestId('cf-collapse');
    setMockScrollHeight(panel, 128);
    // Toggle to expanded
    rerender(<Collapse isExpanded>Content</Collapse>);
    // After synchronous rAF chain height should be target value (128px)
    expect(panel.style.height).toBe('128px');
    // Simulate CSS transition end
    panel.dispatchEvent(new Event('transitionend'));
    // After transition ends height should be auto per handleTransitionEnd
    expect(panel.style.height).toBe('auto');
    expect(panel.style.display).toBe('block');
  });

  it('collapses from expanded: sets pointer-events none and display none after transition', () => {
    const { getByTestId, rerender } = render(
      <Collapse isExpanded>Content</Collapse>,
    );
    const panel = getByTestId('cf-collapse');
    setMockScrollHeight(panel, 256);
    // Collapse
    rerender(<Collapse isExpanded={false}>Content</Collapse>);
    // Height should be transitioning to 0px after rAF
    expect(panel.style.height).toBe('0px');
    // During collapse pointer-events should be none
    expect(panel.style.pointerEvents).toBe('none');
    panel.dispatchEvent(new Event('transitionend'));
    // After transition display becomes none
    expect(panel.style.display).toBe('none');
  });

  it('does not trigger extra renders/effects beyond prop changes', () => {
    const layoutSpy = jest.spyOn(React, 'useLayoutEffect');
    const effectSpy = jest.spyOn(React, 'useEffect');
    const { rerender } = render(
      <Collapse isExpanded={false}>Content</Collapse>,
    );
    rerender(<Collapse isExpanded>Content</Collapse>);
    rerender(<Collapse isExpanded={false}>Content</Collapse>);
    // Expect exactly one layout/effect registration per render (3 renders)
    // (React may batch updates; we assert minimum expected count)
    expect(layoutSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(effectSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    const layoutCalls = layoutSpy.mock.calls.length;
    const effectCalls = effectSpy.mock.calls.length;
    // Dispatch transition events should not cause additional renders/effect registrations
    document
      .querySelectorAll('[data-test-id="cf-collapse"]')
      .forEach((el) => el.dispatchEvent(new Event('transitionend')));
    expect(layoutSpy.mock.calls).toHaveLength(layoutCalls);
    expect(effectSpy.mock.calls).toHaveLength(effectCalls);
    layoutSpy.mockRestore();
    effectSpy.mockRestore();
  });

  it('toggles via user interaction (button click) updating aria-expanded and content region', async () => {
    const user = userEvent.setup();

    const TestHarness = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <button
            type="button"
            aria-controls="collapsible-foo"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Toggle
          </button>
          <Collapse id="collapsible-foo" isExpanded={open}>
            <div>Inner content</div>
          </Collapse>
        </>
      );
    };

    const { getByRole, getByTestId } = render(<TestHarness />);
    const toggle = getByRole('button', { name: /toggle/i });
    const region = getByTestId('cf-collapse');

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(region).toHaveAttribute('aria-hidden', 'true');

    await user.click(toggle);
    // rAF stub makes animation synchronous
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(region).toHaveAttribute('aria-hidden', 'false');
    expect(
      region.style.height === 'auto' || region.style.height.endsWith('px'),
    ).toBeTruthy();

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(region).toHaveAttribute('aria-hidden', 'true');
  });
});
