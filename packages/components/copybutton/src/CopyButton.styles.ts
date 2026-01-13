import { css } from '@emotion/css';
import { CopyButtonProps } from './CopyButton';

export const getCopyButtonStyles = ({
  size,
  hasChildren = false,
}: Pick<CopyButtonProps, 'size'> & { hasChildren?: boolean }) => {
  const buttonSize = size === 'small' ? '32px' : '40px';

  return {
    button: css({
      height: buttonSize,
      minWidth: 'auto',
      ...(hasChildren
        ? {}
        : {
            width: buttonSize,
            'span:first-child': { marginRight: 0 },
          }),
    }),
  };
};
