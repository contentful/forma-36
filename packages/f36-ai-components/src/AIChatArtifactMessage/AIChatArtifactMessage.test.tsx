import { EyeIcon } from '@contentful/f36-icons';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AIChatArtifactMessage } from './AIChatArtifactMessage';

describe('AIChatArtifactMessage', function () {
  it('renders with both icon and title', () => {
    const tree = render(
      <AIChatArtifactMessage icon={<EyeIcon />} title="Review">
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    expect(
      screen.getByTestId('cf-ui-ai-chat-artifact-message'),
    ).toBeInTheDocument();

    expect(tree.getByTestId('test-icon')).toBeInTheDocument();
    expect(tree.getByText('Test Title')).toBeInTheDocument();
  });

  it('does not render header when no icon or title provided', () => {
    const tree = render(
      <AIChatArtifactMessage>
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    expect(
      screen.queryByText('cf-ui-ai-chat-artifact-message'),
    ).not.toBeInTheDocument();
  });
});
