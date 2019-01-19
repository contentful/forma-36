import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatch from './../ColorSwatch/ColorSwatch';

class ColorSwatchGroup extends React.Component {
  static propTypes = {
    group: PropTypes.object.isRequired,
  };

  render() {
    const { group } = this.props;

    return (
      <div>
        {Object.keys(group).map(item => {
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
      </div>
    );
  }
}

export default ColorSwatchGroup;
