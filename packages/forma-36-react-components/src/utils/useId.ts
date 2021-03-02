import { useState, useLayoutEffect } from 'react';

/**
 * This util was inspired by Reach UI package called auto-id
 * https://github.com/reach/reach-ui/blob/86a046f54d53b6420e392b3fa56dd991d9d4e458/packages/auto-id/src/index.ts
 *
 * What is this hook all about?
 * Sometimes we need unique but sequential IDs.
 * One example is that some Accessibility standards rely on the id of some elements.
 * This hook will make sure that we generate a sequence of IDs when rendering a group of components.
 *
 * Out of scope for this solution
 * This solution will break in server-rendered apps because there will be a mismatch between the server id and the client id.
 * But this solution can be extended to cover that, a good example of how to solve that is ReachUI solution already mentioned on the top.
 */

let initialId = 0;

export const useId = () => {
  const [id, setId] = useState(initialId);

  useLayoutEffect(() => {
    setId(++initialId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return id;
};
