import { render } from '@testing-library/react';
import React from 'react';
import { AIChatArtifactMessage } from './AIChatArtifactMessage';

describe('AIChatArtifactMessage', function () {
  it('renders with both icon and title', () => {
    const TestIcon = () => <div data-test-id="test-icon">Icon</div>;
    const tree = render(
      <AIChatArtifactMessage icon={<TestIcon />} title="Test Title">
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    expect(tree.getByTestId('test-icon')).toBeInTheDocument();
    expect(tree.getByText('Test Title')).toBeInTheDocument();
  });

  it('does not render header when no icon or title provided', () => {
    const tree = render(
      <AIChatArtifactMessage>
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    const headerElements = tree.container.querySelectorAll('[class*="header"]');
    expect(headerElements).toHaveLength(0);
  });
});
