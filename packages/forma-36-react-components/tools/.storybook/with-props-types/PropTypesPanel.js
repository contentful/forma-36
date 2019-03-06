import React from 'react';
import { STORY_RENDERED } from '@storybook/core-events';
import _ from 'lodash';
import PropTypesTable from './PropTypesTable';

const propsFromDocgen = type => {
  const props = {};
  const docgenInfoProps = type.__docgenInfo.props;

  Object.keys(docgenInfoProps).forEach(property => {
    const docgenInfoProp = docgenInfoProps[property];
    const defaultValueDesc = docgenInfoProp.defaultValue || {};
    const propType = docgenInfoProp.flowType || docgenInfoProp.type || 'other';

    props[property] = {
      property,
      propType,
      required: docgenInfoProp.required,
      description: docgenInfoProp.description,
      defaultValue: defaultValueDesc.value,
    };
  });

  return props;
};

export default class PropTypesPanel extends React.Component {
  state = { types: [] };

  componentDidMount() {
    const { api } = this.props;
    api.on(STORY_RENDERED, this.onStoryChange);
  }

  componentWillUnmount() {
    const { api } = this.props;
    api.off(STORY_RENDERED, this.onStoryChange);
  }

  onStoryChange = id => {
    const { api } = this.props;
    let types = api.getParameters(id, 'propTypes') || [];
    if (!_.isArray(types)) {
      types = [types];
    }

    this.setState({ types });
  };

  render() {
    const { types } = this.state;
    const { active } = this.props;
    if (types.length === 0) {
      return null;
    }
    if (!active) {
      return null;
    }

    return types.map((type, i) => (
      <PropTypesTable
        key={i}
        name={type.displayName}
        propDefinitions={_.values(type.props)}
      />
    ));
  }
}
