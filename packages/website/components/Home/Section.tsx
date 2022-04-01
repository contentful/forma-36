import React, { useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import { Forma36Context } from '@contentful/f36-core';

const getStyles = ({ isDarkMode }) => {
  return {
    section: css`
      text-align: center;
      padding: ${tokens.spacing3Xl} ${tokens.spacingL};
    `,
    sectionSecondary: css`
      background-color: ${isDarkMode ? tokens.gray800 : tokens.gray100};
      text-align: center;
      padding: ${tokens.spacing3Xl} 0;
    `,
  };
};

export const Section = ({
  children,
  isSecondary,
}: {
  children: React.ReactNode;
  isSecondary?: boolean;
}) => {
  const { isDarkMode } = useContext(Forma36Context);
  const styles = getStyles({ isDarkMode });

  return (
    <section className={isSecondary ? styles.sectionSecondary : styles.section}>
      {children}
    </section>
  );
};
