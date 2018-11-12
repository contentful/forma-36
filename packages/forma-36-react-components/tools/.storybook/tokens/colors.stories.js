import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import ColorSwatchGroup from './../components/ColorSwatchGroup/ColorSwatchGroup';
import DocPage from './../components/DocPage/DocPage';

storiesOf('Tokens|Colors', module)
  .addDecorator(
    host({
      align: 'center top',
      cropMarks: false,
      width: 800,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <DocPage>
        <h1>Color Tokens</h1>
        <p>These are the colors we use at Contentful.</p>
        <section>
          <h1>Semantic</h1>
          <ColorSwatchGroup group="semantic" />
        </section>

        <section>
          <h1>Text</h1>
          <p>
            For use with text on light backgrounds. Use a lighter shade to
            de-emphasize text.
          </p>
          <ColorSwatchGroup group="text" />
        </section>

        <section>
          <h1>Element</h1>
          <p>
            Element colors are used for the larger blocks of our UI - e.g.
            sidepanels, table headers, navigational elements.
          </p>
          <ColorSwatchGroup group="element" />
        </section>

        <section>
          <h1>Contrast</h1>
          <p>
            Contrast colors are used to contrast against our element colors and
            help establish hierarchy. Example usage are app headers or modal
            backgrounds (when used with transparency).
          </p>
          <ColorSwatchGroup group="contrast" />
        </section>

        <section>
          <h1>Blue</h1>
          <p>
            Blue is our primary color and should be used when you want to
            highlight a primary action.
          </p>
          <ColorSwatchGroup group="blue" />
        </section>

        <section>
          <h1>Green</h1>
          <p>
            Green is used to highlight positive actions or messages. E.g. when
            showing a success message, a save action, or a marking a step as
            complete.
          </p>
          <ColorSwatchGroup group="green" />
        </section>

        <section>
          <h1>Red</h1>
          <p>
            Red is used to highlight negative actions or messages. E.g. when
            performing a distructive action such as deleting content, for
            highlighting validation or application error messages, or for
            showing statuses with a negative context.
          </p>
          <ColorSwatchGroup group="red" />
        </section>

        <section>
          <h1>Orange</h1>
          <p>
            Orange is used to highlight actions or messages which require
            attention but don't necessarily have a negative context. E.g.
            showing a draft/unpublished state, or showing a gentle warning
            message rather than an error message.
          </p>
          <ColorSwatchGroup group="orange" />
        </section>

        <section>
          <h1>Coral</h1>
          <p>
            Coral is used for muted warnings and errors. E.g - a note warning
            the user of reaching a limit.
          </p>
          <ColorSwatchGroup group="coral" />
        </section>

        <section>
          <h1>Mint</h1>
          <p>
            Mint is used for muted success messages. E.g - a confirmation note.
          </p>
          <ColorSwatchGroup group="mint" />
        </section>

        <section>
          <h1>Ice</h1>
          <p>
            Ice is used for muted neutral or information messages. E.g - a
            general note.
          </p>
          <ColorSwatchGroup group="ice" />
        </section>

        <section>
          <h1>Misc</h1>
          <p>Miscellaneous colors which don't carry any semantic meaning.</p>
          <ColorSwatchGroup group="misc" />
        </section>
      </DocPage>
    )),
  );
