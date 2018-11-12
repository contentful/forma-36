import React from 'react';
import addons from '@storybook/addons';
import { withInfo } from '@storybook/addon-info';

export class ContentfulStoryWrapper extends React.Component {
  render() {
    const { children, entrySlug } = this.props;
    const channel = addons.getChannel();

    // Send notes to channel
    channel.emit('contentful/notes/add_notes', entrySlug);

    // Return child components

    return withInfo({
      header: false,
    })(() => children)(this.props);
  }
}
