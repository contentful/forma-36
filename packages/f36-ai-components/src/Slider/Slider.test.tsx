import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Slider, type SliderContentState } from './Slider';

const defaultContentState: SliderContentState = {
  id: 'test-content',
  content: <div>Test Content</div>,
};

const alternativeContentState: SliderContentState = {
  id: 'alternative-content',
  content: <div>Alternative Content</div>,
};

describe('Slider', () => {
  it('renders the component', () => {
    render(<Slider contentState={defaultContentState} />);

    expect(screen.getByTestId('cf-ui-slider')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the component with custom testId', () => {
    render(
      <Slider contentState={defaultContentState} testId="custom-slider" />,
    );

    expect(screen.getByTestId('custom-slider')).toBeInTheDocument();
  });

  it('renders the component with additional class name', () => {
    const { container } = render(
      <Slider contentState={defaultContentState} className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('does not render when contentState is undefined', () => {
    render(<Slider />);

    expect(screen.queryByTestId('cf-ui-slider')).not.toBeInTheDocument();
  });

  it('renders static content when not transitioning', () => {
    render(<Slider contentState={defaultContentState} />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    const slider = screen.getByTestId('cf-ui-slider');
    expect(slider.querySelector('[class*="slideContainer"]')).toBeNull();
  });

  it('handles content state changes with transition', async () => {
    const { rerender } = render(<Slider contentState={defaultContentState} />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    rerender(<Slider contentState={alternativeContentState} />);

    await waitFor(() => {
      expect(screen.getByText('Alternative Content')).toBeInTheDocument();
    });
  });

  it('respects custom duration', async () => {
    const shortDuration = 100;
    const { rerender } = render(
      <Slider contentState={defaultContentState} duration={shortDuration} />,
    );

    rerender(
      <Slider
        contentState={alternativeContentState}
        duration={shortDuration}
      />,
    );

    await waitFor(
      () => {
        expect(screen.getByText('Alternative Content')).toBeInTheDocument();
      },
      { timeout: shortDuration + 50 },
    );
  });

  it('handles multiple rapid content changes', async () => {
    const contentState1: SliderContentState = {
      id: 'content-1',
      content: <div>Content 1</div>,
    };
    const contentState2: SliderContentState = {
      id: 'content-2',
      content: <div>Content 2</div>,
    };
    const contentState3: SliderContentState = {
      id: 'content-3',
      content: <div>Content 3</div>,
    };

    const { rerender } = render(<Slider contentState={contentState1} />);

    rerender(<Slider contentState={contentState2} />);
    rerender(<Slider contentState={contentState3} />);

    await waitFor(() => {
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no a11y issues', async () => {
      const { container } = render(
        <Slider contentState={defaultContentState} />,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issues during transition', async () => {
      const { container, rerender } = render(
        <Slider contentState={defaultContentState} />,
      );

      rerender(<Slider contentState={alternativeContentState} />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y issues with complex content', async () => {
      const complexContent: SliderContentState = {
        id: 'complex-content',
        content: (
          <div>
            <button type="button">Interactive Button</button>
            <input aria-label="Test input" />
            <div role="status">Status message</div>
          </div>
        ),
      };

      const { container } = render(<Slider contentState={complexContent} />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

describe('Content State Management', () => {
  it('handles null content state gracefully', () => {
    render(<Slider contentState={null as SliderContentState | null} />);
    expect(screen.queryByTestId('cf-ui-slider')).not.toBeInTheDocument();
  });

  it('handles empty content', () => {
    const emptyContentState: SliderContentState = {
      id: 'empty',
      content: null,
    };

    render(<Slider contentState={emptyContentState} />);
    expect(screen.getByTestId('cf-ui-slider')).toBeInTheDocument();
  });

  it('handles React fragment content', () => {
    const fragmentContent: SliderContentState = {
      id: 'fragment',
      content: (
        <>
          <span>First</span>
          <span>Second</span>
        </>
      ),
    };

    render(<Slider contentState={fragmentContent} />);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
