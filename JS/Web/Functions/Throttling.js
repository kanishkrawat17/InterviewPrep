const throttledBtn = document.querySelector("#throttled-btn");

const throttledFuncHandler = throttledFn(toBeExecuted, 500);

throttledBtn.addEventListener("click", (event) =>
  throttledFuncHandler(event, "Custom Args can come here")
);

function throttledFn(fn, delay = 500) {
  let last = Date.now();
  return function (...args) {
    if (Date.now() - last >= delay) {
      last = Date.now();
      fn(...args);
    }
  };
}

function toBeExecuted(...args) {
  console.log("Button Clicked", args);
}
