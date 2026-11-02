import React, { useState } from 'react';
import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import {
  Badge,
  Button,
  FormControl,
  Stack,
  TextInput,
  ToggleButton,
} from '@contentful/f36-components';
import {
  InlineConfigurationPopover,
  useInlineConfigurationPopover,
} from '@contentful/f36-inline-configuration-popover';
import { ArrowCounterClockwiseIcon } from '@contentful/f36-icons';

export default function InlineConfigurationPopoverListExample() {
  // One popover open at a time
  const [openKey, setOpenKey] = useState(null);
  const [values, setValues] = useState({});

  const parameters = [
    {
      key: 'title',
      name: 'Title',
      caption: 'Text, required',
      isRequired: true,
    },
    {
      key: 'limit',
      name: 'Limit',
      caption: 'Number, optional',
      isRequired: false,
    },
  ];

  // The docs site runs this example with `css` but not `cx` in scope, so the
  // row's state is passed to `css` instead of combining class names.
  const getRowStyle = ({ isSet, isOpen }) =>
    css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacingXs,
      padding: `${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingS}`,
      border: `1px ${isSet || isOpen ? 'solid' : 'dashed'} ${
        isOpen ? tokens.blue500 : tokens.gray300
      }`,
      borderRadius: tokens.borderRadiusMedium,
      backgroundColor: isOpen ? tokens.blue100 : tokens.colorWhite,
    });

  const styles = {
    main: css({
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: tokens.spacing2Xs,
    }),
    caption: css({ color: tokens.gray700, fontSize: tokens.fontSizeS }),
    summary: css({ color: tokens.gray700, fontSize: tokens.fontSizeS }),
  };

  // `useInlineConfigurationPopover()` only works in a component rendered inside the
  // popover. The docs site runs each example as a single function, so this
  // one is declared here; in your code, declare it at the top level.
  const ResetButton = ({ parameter, onReset }) => {
    const { close, announce } = useInlineConfigurationPopover();

    return (
      <Button
        size="small"
        variant="transparent"
        startIcon={<ArrowCounterClockwiseIcon />}
        aria-label={`Reset ${parameter.name} to default`}
        onClick={() => {
          onReset();
          close();
          announce(`${parameter.name} reset to default`);
        }}
      >
        Reset
      </Button>
    );
  };

  return (
    <Stack flexDirection="column" alignItems="stretch" spacing="spacingXs">
      {parameters.map((parameter) => {
        const value = values[parameter.key];
        const isSet = value !== undefined;
        const isOpen = openKey === parameter.key;
        const action = isSet
          ? 'Edit'
          : parameter.isRequired
            ? 'Set'
            : 'Override';
        const summaryId = `${parameter.key}-summary`;
        const setValue = (next) =>
          setValues((current) => ({ ...current, [parameter.key]: next }));

        return (
          <InlineConfigurationPopover
            key={parameter.key}
            isOpen={isOpen}
            onOpen={() => setOpenKey(parameter.key)}
            onClose={() =>
              setOpenKey((current) =>
                current === parameter.key ? null : current,
              )
            }
            placement="right-start"
            offset={16}
          >
            <InlineConfigurationPopover.Anchor>
              <div className={getRowStyle({ isSet, isOpen })}>
                <div className={styles.main}>
                  <span>
                    <Badge variant="featured" size="small" textTransform="none">
                      {parameter.name}
                    </Badge>{' '}
                    <span className={styles.caption}>{parameter.caption}</span>
                  </span>
                  {isSet && (
                    <span id={summaryId} className={styles.summary}>
                      {value}
                    </span>
                  )}
                </div>
                <InlineConfigurationPopover.Trigger>
                  <ToggleButton
                    size="small"
                    isActive={isOpen}
                    onToggle={() => {}}
                    aria-label={`${action} parameter ${parameter.name}`}
                    aria-describedby={isSet ? summaryId : undefined}
                  >
                    {action}
                  </ToggleButton>
                </InlineConfigurationPopover.Trigger>
              </div>
            </InlineConfigurationPopover.Anchor>
            <InlineConfigurationPopover.Content>
              <InlineConfigurationPopover.Header
                title={parameter.name}
                caption={parameter.caption}
              />
              <InlineConfigurationPopover.Body>
                <FormControl marginBottom="none">
                  <FormControl.Label>Value</FormControl.Label>
                  <TextInput
                    size="small"
                    value={value ?? ''}
                    onChange={(event) =>
                      setValue(event.target.value || undefined)
                    }
                    type={parameter.key === 'limit' ? 'number' : 'text'}
                  />
                </FormControl>
              </InlineConfigurationPopover.Body>
              {isSet && (
                <InlineConfigurationPopover.Footer>
                  <ResetButton
                    parameter={parameter}
                    onReset={() => setValue(undefined)}
                  />
                </InlineConfigurationPopover.Footer>
              )}
            </InlineConfigurationPopover.Content>
          </InlineConfigurationPopover>
        );
      })}
    </Stack>
  );
}
