import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders children inside content container', () => {
    render(
      <Layout>
        <p>Body</p>
      </Layout>,
    );
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByTestId('cf-layout-content-container')).toContainElement(
      screen.getByText('Body'),
    );
  });

  it('renders header', () => {
    render(
      <Layout header={<div data-test-id="header">Header</div>}>
        <p>Body</p>
      </Layout>,
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders left sidebar', () => {
    render(
      <Layout
        leftSidebar={<div data-test-id="left-sidebar">Right Sidebar</div>}
      >
        <span>Body</span>
      </Layout>,
    );
    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders right sidebar', () => {
    render(
      <Layout
        rightSidebar={<div data-test-id="right-sidebar">Right Sidebar</div>}
      >
        <span>Body</span>
      </Layout>,
    );
    expect(screen.getByTestId('right-sidebar')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders left and right sidebars', () => {
    render(
      <Layout
        leftSidebar={<nav data-test-id="left-sidebar">Left sidebar</nav>}
        rightSidebar={<aside data-test-id="right-sidebar">Right sidebar</aside>}
      >
        <p>Body</p>
      </Layout>,
    );
    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('right-sidebar')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('forwards ref to root section element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Layout ref={ref}>
        <p>Body</p>
      </Layout>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName.toLowerCase()).toBe('section');
  });

  it('passes arbitrary HTML attributes to root', () => {
    render(
      <Layout id="custom-id" data-foo="bar">
        <p>Body</p>
      </Layout>,
    );
    const root = screen.getByTestId('cf-ui-layout');
    expect(root).toHaveAttribute('id', 'custom-id');
    expect(root).toHaveAttribute('data-foo', 'bar');
  });

  it('applies custom test ids to root and content', () => {
    render(
      <Layout testId="root-id" contentTestId="content-id">
        <p>Body</p>
      </Layout>,
    );
    expect(screen.getByTestId('root-id')).toBeInTheDocument();
    expect(screen.getByTestId('content-id')).toContainElement(
      screen.getByTestId('content-id'),
    );
    expect(screen.getByTestId('content-id')).toContainElement(
      screen.getByText('Body'),
    );
  });

  it('withBoxShadow=false still renders layout', () => {
    render(<Layout withBoxShadow={false}>Content</Layout>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Layout
        header={<div role="banner">Header</div>}
        leftSidebar={<nav data-test-id="left">Left sidebar</nav>}
        rightSidebar={<aside data-test-id="right">Right sidebar</aside>}
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
});
