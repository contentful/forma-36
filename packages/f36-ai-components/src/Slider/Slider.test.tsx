import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders the component', () => {
    render(
      <Slider slideKey="test-content">
        <div>Test Content</div>
      </Slider>,
    );

    expect(screen.getByTestId('cf-ui-slider')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the component with custom testId', () => {
    render(
      <Slider slideKey="test-content" testId="custom-slider">
        <div>Test Content</div>
      </Slider>,
    );

    expect(screen.getByTestId('custom-slider')).toBeInTheDocument();
  });

  it('renders the component with additional class name', () => {
    const { container } = render(
      <Slider slideKey="test-content" className="my-extra-class">
        <div>Test Content</div>
      </Slider>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders static content when not transitioning', () => {
    render(
      <Slider slideKey="test-content">
        <div>Test Content</div>
      </Slider>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    const slider = screen.getByTestId('cf-ui-slider');
    expect(slider.querySelector('[class*="slideContainer"]')).toBeNull();
  });

  it('handles content key changes with transition', async () => {
    const { rerender } = render(
      <Slider slideKey="content-1">
        <div>Test Content</div>
      </Slider>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    rerender(
      <Slider slideKey="content-2">
        <div>Alternative Content</div>
      </Slider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Alternative Content')).toBeInTheDocument();
    });
  });

  it('respects custom duration', async () => {
    const shortDuration = 100;
    const { rerender } = render(
      <Slider slideKey="content-1" duration={shortDuration}>
        <div>Test Content</div>
      </Slider>,
    );

    rerender(
      <Slider slideKey="content-2" duration={shortDuration}>
        <div>Alternative Content</div>
      </Slider>,
    );

    await waitFor(
      () => {
        expect(screen.getByText('Alternative Content')).toBeInTheDocument();
      },
      { timeout: shortDuration + 50 },
    );
  });

  it('handles multiple rapid content changes', async () => {
    const { rerender } = render(
      <Slider slideKey="content-1">
        <div>Content 1</div>
      </Slider>,
    );

    rerender(
      <Slider slideKey="content-2">
        <div>Content 2</div>
      </Slider>,
    );
    rerender(
      <Slider slideKey="content-3">
        <div>Content 3</div>
      </Slider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no a11y issues', async () => {
      const { container } = render(
        <Slider slideKey="test-content">
          <div>Test Content</div>
        </Slider>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issues during transition', async () => {
      const { container, rerender } = render(
        <Slider slideKey="content-1">
          <div>Test Content</div>
        </Slider>,
      );

      rerender(
        <Slider slideKey="content-2">
          <div>Alternative Content</div>
        </Slider>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issues with complex content', async () => {
      const { container } = render(
        <Slider slideKey="complex-content">
          <div>
            <button type="button">Interactive Button</button>
            <input aria-label="Test input" />
            <div role="status">Status message</div>
          </div>
        </Slider>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

describe('Content Management', () => {
  it('handles missing children gracefully', () => {
    render(<Slider slideKey="test" />);
    expect(screen.getByTestId('cf-ui-slider')).toBeInTheDocument();
  });

  it('handles empty content', () => {
    render(<Slider slideKey="empty">{null}</Slider>);
    expect(screen.getByTestId('cf-ui-slider')).toBeInTheDocument();
  });

  it('handles React fragment content', () => {
    render(
      <Slider slideKey="fragment">
        <>
          <span>First</span>
          <span>Second</span>
        </>
      </Slider>,
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
