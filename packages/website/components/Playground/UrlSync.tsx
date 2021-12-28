import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';
import { useActiveCode } from '@codesandbox/sandpack-react';
import * as coder from '../../utils/coder';

export function UrlSync() {
  const router = useRouter();
  const { code } = useActiveCode();
  const [debouncedCode] = useDebounce(code, 2000);

  useEffect(() => {
    const href = `/playground?code=${coder.encode(debouncedCode)}`;
    router.push(href, undefined, { shallow: true });
  }, [debouncedCode]);

  return null;
}
