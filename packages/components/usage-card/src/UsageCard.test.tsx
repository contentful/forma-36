import React from 'react';
import { render, screen } from '@testing-library/react';
import { UsageCard } from '../src/CompoundUsageCard';
import { axe } from 'jest-axe';
import { TextLink } from '@contentful/f36-text-link';

describe('UsageCard', function () {
  it('renders the component', () => {
    render(<UsageCard>Usage Card</UsageCard>);
    expect(screen.getByTestId('cf-ui-usage-card')).toBeTruthy();
  });

  it('has no a11y issues with Info card type', async () => {
    const { container } = render(
      <UsageCard variant="info">Info Card</UsageCard>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues with Usage card type', async () => {
    const { container } = render(
      <UsageCard variant="usage">Usage Card</UsageCard>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('renders the component with a header', () => {
    render(
      <UsageCard header={<UsageCard.Header title="Usage Card Header" />}>
        Usage Card with Header
      </UsageCard>,
    );
    expect(screen.getByTestId('cf-ui-usage-card-header')).toBeTruthy();
  });
  it('renders the component with a description', () => {
    render(
      <UsageCard
        description={
          <UsageCard.Description>Usage Card Description</UsageCard.Description>
        }
      >
        Usage Card with Description
      </UsageCard>,
    );
    expect(screen.getByTestId('cf-ui-usage-card-description')).toBeTruthy();
  });

  it('renders component with a description with link as children', () => {
    render(
      <UsageCard
        description={
          <UsageCard.Description>
            This is a description of the usage card.
            {'  '}
            <TextLink
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.contentful.com'}
            >
              Learn more
            </TextLink>
          </UsageCard.Description>
        }
      >
        Usage Card with Description and Link
      </UsageCard>,
    );
    expect(screen.getByText('Learn more')).toBeTruthy();
  });
});
