import React from 'react';
import addons from '@storybook/addons';
import MarkdownIt from 'markdown-it';
import { createClient } from 'contentful';

const styles = {
  notesPanel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
  },
};

class Notes extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: null,
      notes: null,
      status: null,
      loading: true,
    };
    this.onAddNotes = this.onAddNotes.bind(this);
  }

  onAddNotes(entrySlug) {
    if (!entrySlug) return;

    const client = createClient({
      space: process.env.STORYBOOK_CONTENTFUL_SPACE_ID,
      accessToken: process.env.STORYBOOK_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({
        content_type: 'styleguideDocumentation',
        'fields.slug': entrySlug,
      })
      .then(response => response.items[0].fields)
      .then(data =>
        this.setState({
          title: data.title,
          notes: data.designNotes,
          status: data.status,
          loading: false,
        }),
      );
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('contentful/notes/add_notes', this.onAddNotes);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddNotes(false);
    });
  }

  render() {
    const md = new MarkdownIt();

    if (this.state.loading) return '';

    return (
      <div style={styles.notesPanel}>
        <header>
          <h1>{this.state.title}</h1>
          <span>Status: {this.state.status}</span>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: md.render(this.state.notes) }}
        />
      </div>
    );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener('contentful/notes/add_notes', this.onAddNotes);
  }
}

// Register the addon with a unique name.
addons.register('contentful/notes', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('contentful/notes/panel', {
    title: 'Notes',
    render: () => <Notes channel={addons.getChannel()} api={api} />,
  });
});
