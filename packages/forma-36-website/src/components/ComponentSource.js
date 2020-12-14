import React from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as f36Components from '@contentful/forma-36-react-components';
import {
  Grid,
  GridItem,
  Autocomplete,
  Flex,
  ProductIcon,
  Accordion,
  AccordionItem,
} from '@contentful/forma-36-react-components/dist/alpha';
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

  editor: css`
    background-color: #222031;
    color: #ffffff;
  `,
};

class ComponentSource extends React.Component {
  state = { isOpen: true };

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
          scope={{
            ...f36Components,
            Grid,
            GridItem,
            Autocomplete,
            Flex,
            ProductIcon,
            Accordion,
            AccordionItem,
          }}
        >
          <Card padding="none">
            <div css={styles.preview}>
              <LivePreview />
            </div>
            {this.state.isOpen && (
              <React.Fragment>
                <LiveError css={styles.error} />
                <LiveEditor css={styles.editor} />
              </React.Fragment>
            )}
            <Button isFullWidth buttonType="muted" onClick={this.handleToggle}>
              {this.state.isOpen ? 'Hide source' : 'Show source'}
            </Button>
          </Card>
        </LiveProvider>
      </div>
    );
  }
}

export default ComponentSource;
