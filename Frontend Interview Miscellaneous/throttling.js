const myThrottle = (callback, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};

const func = (e) => console.log(e);

const throttle = myThrottle(func, 100);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log("clicked");
    throttle("Throttle");
  }, 800);
}
