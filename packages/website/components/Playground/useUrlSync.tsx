import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';
import { useActiveCode } from '@codesandbox/sandpack-react';
import * as coder from '../../utils/coder';

export function useUrlSync() {
  const router = useRouter();
  const [codeUrl, setCodeUrl] = useState('');
  const { code } = useActiveCode();
  const [debouncedCode] = useDebounce(code, 1000);

  useEffect(() => {
    const code = coder.encode(debouncedCode);

    if (code !== router.query.code) {
      const href = `/playground?code=${code}`;
      window.history.replaceState('', '', href);
      setCodeUrl(window.location.origin + href);
    }
  }, [debouncedCode, router.query.code]);

  return { codeUrl };
}
