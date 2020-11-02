const throttle = (delay = 200, fn: Function) => {
  let lastCall = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const throttleExec = (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args); // eslint-disable-line
  };
  return throttleExec;
};

export default throttle;
