import { css } from 'emotion';
import { CopyButtonProps } from './CopyButton';

export const getCopyButtonStyles = ({
  size,
}: Pick<CopyButtonProps, 'size'>) => {
  const buttonSize = size === 'small' ? '32px' : '40px';

  return {
    button: css({
      height: buttonSize,
      minWidth: 'auto',
      width: buttonSize,

      'span:first-child': { marginRight: 0 },
    }),
  };
};
