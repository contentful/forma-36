import React, { Component } from 'react';
import ColorSwatch from './ColorSwatch';
import { Flex } from '@contentful/forma-36-react-components';

class ColorSwatchGroup extends Component {
  render() {
    const { group } = this.props;

    return (
      <Flex marginBottom="spacingL" flexWrap="wrap">
        {Object.keys(group).map((item) => {
          const value = group[item];

          return (
            <ColorSwatch
              key={item}
              name={item}
              hex={value}
              cssVar={`--${item}`}
            />
          );
        })}
      </Flex>
    );
  }
}

export default ColorSwatchGroup;
