import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorSwatchGroup from '../components/ColorSwatchGroup/ColorSwatchGroup';
import DocPage from '../components/DocPage/DocPage';

import semanticColors from '../../../../forma-36-tokens/src/tokens/colors/colors-semantic';
import textColors from '../../../../forma-36-tokens/src/tokens/colors/colors-text';
import elementColors from '../../../../forma-36-tokens/src/tokens/colors/colors-elements';
import contrastColors from '../../../../forma-36-tokens/src/tokens/colors/colors-contrast';
import blueColors from '../../../../forma-36-tokens/src/tokens/colors/colors-blue';
import greenColors from '../../../../forma-36-tokens/src/tokens/colors/colors-green';
import redColors from '../../../../forma-36-tokens/src/tokens/colors/colors-red';
import orangeColors from '../../../../forma-36-tokens/src/tokens/colors/colors-orange';
import coralColors from '../../../../forma-36-tokens/src/tokens/colors/colors-coral';
import peachColors from '../../../../forma-36-tokens/src/tokens/colors/colors-peach';
import mintColors from '../../../../forma-36-tokens/src/tokens/colors/colors-mint';
import iceColors from '../../../../forma-36-tokens/src/tokens/colors/colors-ice';
import whiteColors from '../../../../forma-36-tokens/src/tokens/colors/colors-white';

storiesOf('Tokens|Colors', module).add('default', () => (
  <DocPage>
    <h1>Color Tokens</h1>
    <p>These are the colors we use at Contentful.</p>
    <section>
      <h1>Semantic</h1>
      <ColorSwatchGroup group={semanticColors} />
    </section>

    <section>
      <h1>Text</h1>
      <p>
        For use with text on light backgrounds. Use a lighter shade to
        de-emphasize text.
      </p>
      <ColorSwatchGroup group={textColors} />
    </section>

    <section>
      <h1>Element</h1>
      <p>
        Element colors are used for the larger blocks of our UI - e.g.
        sidepanels, table headers, navigational elements.
      </p>
      <ColorSwatchGroup group={elementColors} />
    </section>

    <section>
      <h1>Contrast</h1>
      <p>
        Contrast colors are used to contrast against our element colors and help
        establish hierarchy. Example usage are app headers or modal backgrounds
        (when used with transparency).
      </p>
      <ColorSwatchGroup group={contrastColors} />
    </section>

    <section>
      <h1>Blue</h1>
      <p>
        Blue is our primary color and should be used when you want to highlight
        a primary action.
      </p>
      <ColorSwatchGroup group={blueColors} />
    </section>

    <section>
      <h1>Green</h1>
      <p>
        Green is used to highlight positive actions or messages. E.g. when
        showing a success message, a save action, or a marking a step as
        complete.
      </p>
      <ColorSwatchGroup group={greenColors} />
    </section>

    <section>
      <h1>Red</h1>
      <p>
        Red is used to highlight negative actions or messages. E.g. when
        performing a distructive action such as deleting content, for
        highlighting validation or application error messages, or for showing
        statuses with a negative context.
      </p>
      <ColorSwatchGroup group={redColors} />
    </section>

    <section>
      <h1>Orange</h1>
      <p>
        Orange is used to highlight actions or messages which require attention
        but don't necessarily have a negative context. E.g. showing a
        draft/unpublished state, or showing a gentle warning message rather than
        an error message.
      </p>
      <ColorSwatchGroup group={orangeColors} />
    </section>

    <section>
      <h1>Coral</h1>
      <p>
        Coral is used for muted warnings and errors. E.g - a note warning the
        user of reaching a limit.
      </p>
      <ColorSwatchGroup group={coralColors} />
    </section>

    <section>
      <h1>Peach</h1>
      <p>Peach is used for muted warning messages. E.g - a warning note.</p>
      <ColorSwatchGroup group={peachColors} />
    </section>

    <section>
      <h1>Mint</h1>
      <p>Mint is used for muted success messages. E.g - a confirmation note.</p>
      <ColorSwatchGroup group={mintColors} />
    </section>

    <section>
      <h1>Ice</h1>
      <p>
        Ice is used for muted neutral or information messages. E.g - a general
        note.
      </p>
      <ColorSwatchGroup group={iceColors} />
    </section>

    <section>
      <h1>White</h1>
      <ColorSwatchGroup group={whiteColors} />
    </section>
  </DocPage>
));
