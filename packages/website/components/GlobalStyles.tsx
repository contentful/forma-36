import React from 'react';
import { css, Global } from '@emotion/react';

import tokens from '@contentful/f36-tokens';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          box-sizing: inherit;
        }

        html {
          border: 0;
          box-sizing: border-box;
          margin: 0;
          min-height: 100%;
          padding: 0;
        }

        body {
          color: ${tokens.gray800};
          font-family: ${tokens.fontStackPrimary};
          font-size: ${tokens.fontSizeM};
          line-height: ${tokens.lineHeightM};
          min-width: 1280px;
        }

        code {
          font-family: ${tokens.fontStackMonospace};
          white-space: nowrap;
          font-weight: ${tokens.fontWeightMedium};
          background-color: ${tokens.gray200};
          font-size: 95%;
          margin: 0;
          padding: 0.2em 0.4em;
          border-radius: ${tokens.borderRadiusSmall};
        }

        pre {
          margin: 0;
          white-space: break-spaces;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
        }

        /* OSANO STYLES BEGIN */

        .osano-cm-window {
          font-family: ${tokens.fontStackPrimary};
          z-index: 101;
        }

        /* Widget */
        .osano-cm-widget {
          display: none;
        }

        .osano-cm-link {
          color: ${tokens.blue500};
          text-decoration: none;
        }
        .osano-cm-link:focus {
          box-shadow: ${tokens.glowPrimary};
        }
        .osano-cm-link:hover {
          text-decoration: underline;
        }

        /* Dialog */
        .osano-cm-dialog {
          box-shadow: none;
          box-sizing: border-box;
          border-top: 1px solid ${tokens.gray200};
          background: ${tokens.colorWhite};
        }

        .osano-cm-dialog .osano-cm-dialog__list {
          margin-top: ${tokens.spacingM};
        }

        .osano-cm-dialog .osano-cm-list-item__toggle {
          margin-right: ${tokens.spacingM};
        }

        .osano-cm-dialog .osano-cm-button {
          cursor: pointer;
          font-weight: normal;
          text-decoration: none;
          vertical-align: middle;
          color: ${tokens.gray800};
          font-size: ${tokens.fontSizeM};
          font-family: ${tokens.fontStackPrimary};
          background-color: ${tokens.colorWhite};
          border: 2px solid ${tokens.gray300};
          border-radius: ${tokens.borderRadiusMedium};
          line-height: ${tokens.lineHeightDefault};
        }

        .osano-cm-dialog .osano-cm-button.osano-cm-save:focus {
          box-shadow: ${tokens.glowMuted};
        }
        .osano-cm-dialog .osano-cm-button.osano-cm-save:hover {
          background-color: ${tokens.gray100};
        }

        .osano-cm-dialog .osano-cm-button.osano-cm-accept-all {
          color: ${tokens.colorWhite};
          border-color: ${tokens.blue500};
          background-color: ${tokens.blue500};
        }
        .osano-cm-dialog .osano-cm-button.osano-cm-accept-all:focus {
          box-shadow: ${tokens.glowPrimary};
        }
        .osano-cm-dialog .osano-cm-button.osano-cm-accept-all:hover {
          border-color: ${tokens.blue600};
          background-color: ${tokens.blue600};
        }

        .osano-cm-dialog .osano-cm-dialog__content {
          font-size: ${tokens.fontSizeM};
          color: ${tokens.gray600};
        }

        /* Toggle */
        .osano-cm-toggle {
          transition: none;
          flex-direction: row;
        }

        .osano-cm-toggle .osano-cm-label {
          color: ${tokens.gray800};
          font-weight: ${tokens.fontWeightDemiBold};
          margin-left: ${tokens.spacingXs};
        }

        .osano-cm-toggle .osano-cm-toggle__switch {
          padding: 0;
          margin: 0;
          height: 1rem;
          width: 1rem;
          cursor: pointer;
          border-radius: 20%;
          transition: none;
          box-sizing: border-box;
          border: 2px solid ${tokens.gray400};
          background-size: contain;
          background-repeat: no-repeat;
          background-color: ${tokens.colorWhite};
          background-image: url('/images/checkmark.svg');
        }
        .osano-cm-toggle .osano-cm-toggle__switch:before,
        .osano-cm-toggle .osano-cm-toggle__switch:after {
          display: none;
        }

        .osano-cm-toggle .osano-cm-toggle__input {
          width: 1rem;
          height: 1rem;
          line-height: ${tokens.lineHeightDefault};
          opacity: 0;
          position: absolute;
          cursor: pointer;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .osano-cm-toggle
          .osano-cm-toggle__input:hover
          + .osano-cm-toggle__switch {
          border-color: ${tokens.gray400};
          background-color: ${tokens.colorWhite};
        }

        .osano-cm-toggle
          .osano-cm-toggle__input:focus
          + .osano-cm-toggle__switch {
          outline: none;
          box-shadow: ${tokens.glowPrimary};
          border-color: ${tokens.blue500};
          background-color: ${tokens.colorWhite};
        }

        .osano-cm-toggle
          .osano-cm-toggle__input:checked
          + .osano-cm-toggle__switch,
        .osano-cm-toggle
          .osano-cm-toggle__input:focus:checked
          + .osano-cm-toggle__switch,
        .osano-cm-toggle
          .osano-cm-toggle__input:hover:checked
          + .osano-cm-toggle__switch {
          border-color: ${tokens.blue500};
          background-color: ${tokens.blue500};
        }

        .osano-cm-toggle
          .osano-cm-toggle__input:disabled
          + .osano-cm-toggle__switch {
          border-color: ${tokens.gray400};
          background-color: ${tokens.gray400};
        }

        .osano-cm-toggle
          .osano-cm-toggle__input:checked:disabled
          + .osano-cm-toggle__switch,
        .osano-cm-toggle
          .osano-cm-toggle__input:checked:hover:disabled
          + .osano-cm-toggle__switch {
          border-color: ${tokens.gray400};
          background-color: ${tokens.gray400};
          background-image: url('/images/checkmark-disabled.svg');
        }

        /* Drawer */
        .osano-cm-info-dialog .osano-cm-header {
          color: ${tokens.gray800};
        }

        .osano-cm-info-dialog .osano-cm-description {
          font-size: ${tokens.fontSizeM};
          color: ${tokens.gray600};
        }

        .osano-cm-info-dialog .osano-cm-close {
          display: none;
        }

        .osano-cm-info-dialog .osano-cm-disclosure__toggle {
          color: ${tokens.fontStackPrimary};
        }
        .osano-cm-info-dialog .osano-cm-disclosure__toggle:focus,
        .osano-cm-info-dialog .osano-cm-disclosure__toggle:active {
          outline: auto;
        }

        .osano-cm-info-dialog .osano-cm-save {
          cursor: pointer;
          font-weight: normal;
          text-decoration: none;
          vertical-align: middle;
          color: ${tokens.colorWhite};
          font-size: ${tokens.fontSizeM};
          font-family: ${tokens.fontStackPrimary};
          border: 2px solid ${tokens.blue500};
          border-radius: ${tokens.borderRadiusMedium};
          line-height: ${tokens.lineHeightDefault};
          background-color: ${tokens.blue500};
        }
        .osano-cm-info-dialog .osano-cm-save:focus {
          box-shadow: ${tokens.glowPrimary};
        }
        .osano-cm-info-dialog .osano-cm-save:hover {
          border-color: ${tokens.blue600};
          background-color: ${tokens.blue600};
        }

        .osano-cm-info-dialog .osano-cm-info-views {
          height: auto;
        }

        /* OSANO STYLES END */
      `}
    />
  );
};
