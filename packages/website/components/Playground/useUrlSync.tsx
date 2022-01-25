import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';
import { useActiveCode } from '@codesandbox/sandpack-react';
import * as coder from '../../utils/coder';

export function useUrlSync() {
  const router = useRouter();
  const { code } = useActiveCode();
  const [debouncedCode] = useDebounce(code, 1000);

  useEffect(() => {
    const code = coder.encode(debouncedCode);
    if (code === router.query.code) {
      return;
    }
    const href = `/playground?code=${code}`;
    router.push(href, undefined, { shallow: true });
  }, [debouncedCode]);
}
