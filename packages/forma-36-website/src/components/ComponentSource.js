import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as f36Components from '@contentful/forma-36-react-components';
import { Card, Button } from '@contentful/forma-36-react-components';

const styles = {
  preview: css`
    padding: 20px;
  `,

  error: css`
    font-family: ${tokens.fontStackMonospace};
    font-size: ${tokens.fontSizeS};
    background: ${tokens.colorNegative};
    color: ${tokens.colorWhite};
    padding: ${tokens.spacingXs};
  `,
};

class ComponentSource extends React.Component {
  state = { isOpen: false };

  handleToggle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    return (
      <LiveProvider
        className="f36-margin-bottom--m"
        code={this.props.children}
        scope={{ ...f36Components }}
      >
        <Card padding="none">
          <div css={styles.preview}>
            <LivePreview />
          </div>
          {this.state.isOpen && (
            <div>
              <LiveError css={styles.error} />
              <LiveEditor />
            </div>
          )}
          <Button isFullWidth buttonType="muted" onClick={this.handleToggle}>
            {this.state.isOpen ? 'Hide source' : 'Show source'}
          </Button>
        </Card>
      </LiveProvider>
    );
  }
}

export default ComponentSource;
