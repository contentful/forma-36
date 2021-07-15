import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { Flex } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';

class ColorA11yGroup extends Component {
  render() {
    const { group } = this.props;

    return (
      <Flex marginBottom="spacingXs" flexWrap="wrap">
        {Object.keys(group).map((item) => {
          const value = group[item];
          let textColor;
          if (item.includes('100') || item.includes('200') || item.includes('300') || item.includes('400') || item.includes('yellow-500') || item.includes('yellow-600') || item.includes('yellow-700')) {
            textColor = tokens.gray800
          } else {
            textColor = tokens.colorWhite
          }

          return (
            <ColorBox
              key={item}
              name={item}
              hex={value}
              textColor={textColor}
              size={10}
            />
          );
        })}
      </Flex>
    );
  }
}

export default ColorA11yGroup;
