import React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as f36Components from '@contentful/f36-components';
import { Card, Button } from '@contentful/f36-components';
import * as f36icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

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

  editor: css`
    background-color: #222031;
    color: #ffffff;
  `,
};

class ComponentSource extends React.Component {
  state = { isOpen: false };

  handleToggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    return (
      <div className="f36-margin-bottom--m">
        <LiveProvider
          code={this.props.children.trim()}
          // The order is important here as `f36icons` and `f36Components` both
          // export a component called `Heading`
          scope={{
            ...f36icons,
            ...f36Components,
            f36icons,
            tokens,
            Icon,
          }}
        >
          <Card padding="none">
            <div className={styles.preview}>
              <LivePreview />
            </div>
            {this.state.isOpen && (
              <React.Fragment>
                <LiveError className={styles.error} />
                <LiveEditor className={styles.editor} />
              </React.Fragment>
            )}
            <Button isFullWidth variant="secondary" onClick={this.handleToggle}>
              {this.state.isOpen ? 'Hide source' : 'Show source'}
            </Button>
          </Card>
        </LiveProvider>
      </div>
    );
  }
}

export default ComponentSource;
