import React, { Component } from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';

class ColorSwatchGroup extends Component<{ group: { [key: string]: string } }> {
  render() {
    const { group } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

export default ColorSwatchGroup;
