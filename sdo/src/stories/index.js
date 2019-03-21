import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../components/App/App';
import { DraggableBlock } from '../components/DraggableBlock/DraggableBlock';
import { BlockContainer } from '../components/BlockContainer/BlockContainer';
import { Logo } from '../components/Logo/Logo';
import { Player } from '../components/AudioPlayer/AudioPlayer';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('App', module)
  .add('default app', () => <App />);

const longArr = new Array(100).fill(0).map((e, index) => index);
storiesOf('Draggable', module)
  .add('Block', () => <DraggableBlock blockText='Text' />)
  .add('BlockContainer', () => <BlockContainer blocks={longArr} />)
  ;
   
// storiesOf('Logo', module)
//   .add('logo', () => <Logo />  );

storiesOf('Audio', module)
  .add('player', () => <Player />  );