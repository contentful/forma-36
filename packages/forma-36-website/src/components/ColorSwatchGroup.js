import React, { Component } from 'react';
import ColorSwatch from './ColorSwatch';

class ColorSwatchGroup extends Component {
  render() {
    const { group } = this.props;

    return (
      <div className="f36-margin-bottom--l">
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
