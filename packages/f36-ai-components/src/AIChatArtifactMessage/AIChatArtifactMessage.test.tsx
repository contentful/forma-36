import { EyeIcon } from '@contentful/f36-icons';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AIChatArtifactMessage } from './AIChatArtifactMessage';

describe('AIChatArtifactMessage', function () {
  it('renders with both icon and title', () => {
    render(
      <AIChatArtifactMessage
        icon={<EyeIcon testId="eye-icon" />}
        title="Review"
      >
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    expect(
      screen.getByTestId('cf-ui-ai-chat-artifact-message'),
    ).toBeInTheDocument();

    expect(screen.getByTestId('eye-icon')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  it('does not render header when no icon or title provided', () => {
    render(
      <AIChatArtifactMessage>
        <div>Test content</div>
      </AIChatArtifactMessage>,
    );

    expect(
      screen.queryByText('cf-ui-ai-chat-artifact-message'),
    ).not.toBeInTheDocument();
  });
});
