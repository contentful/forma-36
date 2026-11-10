import React from 'react';
import {
  Button,
  IconButton,
  type ButtonProps,
  type IconButtonProps,
} from '@contentful/f36-button';
import { usePopoverContext } from '../PopoverContext';
import { useMergeRefs } from '@floating-ui/react';

type TextTriggerButtonProps = Omit<ButtonProps<'button'>, 'children'> & {
  title: string;
};
type IconTriggerButtonProps = IconButtonProps<'button'>;

export type PopoverButtonProps =
  TextTriggerButtonProps | IconTriggerButtonProps;

function isTextTriggerButtonProps(
  props: TextTriggerButtonProps | IconButtonProps<'button'>,
): props is TextTriggerButtonProps {
  return 'title' in props;
}

export const PopoverTriggerButton = React.forwardRef(function (
  props: PopoverButtonProps,
  propRef,
) {
  const context = usePopoverContext();

  const ref = useMergeRefs([context?.refs.setReference, propRef]);

  const referenceProps = context.getReferenceProps({
    'aria-haspopup': props['aria-haspopup'] ?? 'dialog',
    'aria-expanded': context.isOpen,
  });

  if (isTextTriggerButtonProps(props)) {
    const { title, ...otherProps } = props;
    return (
      <Button type="button" ref={ref} {...otherProps} {...referenceProps}>
        {title}
      </Button>
    );
  }

  const { withTooltip, tooltipProps, ...otherProps } = props;

  const withTooltipProps = withTooltip
    ? {
        withTooltip,
        tooltipProps: { withTriggerWrapper: false, ...tooltipProps },
      }
    : undefined;

  return (
    <IconButton
      ref={ref}
      {...otherProps}
      {...referenceProps}
      {...withTooltipProps}
    />
  );
});
