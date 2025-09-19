import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Layout } from './Layout';

// Helper consumer to assert context values
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContextInspector: React.FC<{ onValue: (v: any) => void }> = ({
  onValue,
}) => {
  // Dynamically import to avoid circular import if direct value export exists
  const ReactCtx = require('./LayoutContext');
  const ctx = React.useContext(ReactCtx.LayoutContext);
  React.useEffect(() => {
    onValue(ctx);
  }, [ctx, onValue]);
  return null;
};

const makeSection = (label: string) => <div data-test-id={label}>{label}</div>;

describe('Layout', () => {
  it('renders children inside content container', () => {
    render(
      <Layout>
        <p>Content</p>
      </Layout>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByTestId('cf-layout-content-container')).toContainElement(
      screen.getByText('Content'),
    );
  });

  it('renders header when provided', () => {
    render(
      <Layout header={<div data-test-id="hdr">Header</div>}>
        <p>Body</p>
      </Layout>,
    );
    expect(screen.getByTestId('hdr')).toBeInTheDocument();
  });

  it('renders left and right sidebars', () => {
    render(
      <Layout
        leftSidebar={makeSection('left')}
        rightSidebar={makeSection('right')}
      >
        <p>Main</p>
      </Layout>,
    );
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('omits sidebars when not provided', () => {
    render(<Layout>Only Content</Layout>);
    expect(screen.queryByTestId('left')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right')).not.toBeInTheDocument();
  });

  it('forwards ref to root section element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Layout ref={ref}>X</Layout>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName.toLowerCase()).toBe('section');
  });

  it('passes arbitrary HTML attributes to root', () => {
    render(
      <Layout id="custom-id" data-foo="bar">
        X
      </Layout>,
    );
    const root = screen.getByTestId('cf-ui-layout');
    expect(root).toHaveAttribute('id', 'custom-id');
    expect(root).toHaveAttribute('data-foo', 'bar');
  });

  it('applies custom itIds (root & content)', () => {
    render(
      <Layout testId="root-id" contentTestId="content-id">
        X
      </Layout>,
    );
    expect(screen.getByTestId('root-id')).toBeInTheDocument();
    expect(screen.getByTestId('content-id')).toBeInTheDocument();
  });

  it('withBoxShadow=false still renders layout', () => {
    render(<Layout withBoxShadow={false}>Content</Layout>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Layout
        header={<div role="banner">Header</div>}
        leftSidebar={<nav aria-label="Primary">Nav</nav>}
        rightSidebar={<aside aria-label="Meta">Meta</aside>}
      >
        <main>
          <h1>Title</h1>
          <p>Body</p>
        </main>
      </Layout>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders only header + children', () => {
    render(
      <Layout header={<div data-test-id="only-header">H</div>}>
        <span>Body</span>
      </Layout>,
    );
    expect(screen.getByTestId('only-header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders only one sidebar (right)', () => {
    render(
      <Layout rightSidebar={<div data-test-id="right-only">R</div>}>
        <span>Body</span>
      </Layout>,
    );
    expect(screen.getByTestId('right-only')).toBeInTheDocument();
  });
});
