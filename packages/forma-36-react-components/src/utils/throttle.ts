const throttle = (delay: number = 200, fn: Function) => {
  let lastCall = 0;
  const throttleExec = (...args) => {
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
