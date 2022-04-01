import React, { useContext } from 'react';
import { Flex, Switch } from '@contentful/f36-components';
import { Dark, Default, Forma36Context } from '@contentful/f36-core';
import { css } from 'emotion';

export function ThemeSwitch() {
  const { isDarkMode, setTheme } = useContext(Forma36Context);

  const toggleDarkMode = () => {
    isDarkMode ? setTheme(Default) : setTheme(Dark);
  };

  return (
    <Flex alignItems="center" className={css({ marginLeft: '-64px' })}>
      <Switch isChecked={isDarkMode} onChange={toggleDarkMode}>
        Turn to the Dark Side&nbsp;
        <span role="img">🌑</span>
      </Switch>
    </Flex>
  );
}
