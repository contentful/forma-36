import React, { useContext } from 'react';
import { Flex, Switch } from '@contentful/f36-components';
import { Dark, Default, Forma36Context } from '@contentful/f36-core';

export function ThemeSwitch() {
  const { setTheme, theme } = useContext(Forma36Context);

  const toggleDarkMode = () => {
    theme === Dark ? setTheme(Default) : setTheme(Dark);
  };

  return (
    <Flex alignItems="center" marginLeft="spacingM">
      <Switch onChange={toggleDarkMode}>
        <span aria-label="Dark mode" role="img">
          Dark mode 🌑
        </span>
      </Switch>
    </Flex>
  );
}
