// <============================= CODE FOR DEBOUNCE =============================>
const input = document.querySelector(".debounceInput");

const result = (output) => {
  const p = document.querySelector(".debounceOutput");
  p.textContent = output;
};

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Hello");
      func(...args);
    }, delay);
  };
};

const myDebounce = debounce(result, 1000);

input.addEventListener("keyup", (e) => {
  myDebounce(e.target.value);
});

// <============================= CODE FOR Throttling =============================>
const markup = `<button class="throttleInput">Throttle(Click As Fast As You Can)!!!!</button>
<p class="throttleOutput"></p>`;
document.querySelector("#app").insertAdjacentHTML("beforeend", markup);

const throttle = (func, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    func(...args);
  };
};

const p2 = document.querySelector(".throttleOutput");

const throttleResult = () => {
  p2.textContent = p2.textContent ? +p2.textContent + 1 : 1;
};

const myThrottle = throttle(throttleResult, 1000);

const btn = document.querySelector(".throttleInput");

btn.addEventListener("click", () => {
  myThrottle();
});
