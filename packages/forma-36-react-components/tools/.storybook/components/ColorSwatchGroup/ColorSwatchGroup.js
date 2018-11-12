import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatch from './../ColorSwatch/ColorSwatch';
import { colors } from './../../tokens/tokens';

class ColorSwatchGroup extends React.Component {
  static propTypes = {
    group: PropTypes.string.isRequired,
  };

  render() {
    const { group } = this.props;

    return (
      <div>
        {colors
          .filter(item => item.group === group)
          .map((item, index) => (
            <ColorSwatch
              key={index}
              name={item.name}
              hex={item.hex}
              cssVar={item.cssVar}
            />
          ))}
      </div>
    );
  }
}

export default ColorSwatchGroup;
