const btn = document.querySelector("#btn");

const debouncedHandler = debouncedFn(toBeExecuted, 500);
btn.addEventListener("click", (event) => {
    debouncedHandler(event, "Custom Data");
});

function toBeExecuted(...args) {
    console.log("Button Clicked", args);
}

function debouncedFn(fn, delay) {
    let id = null;
    return function (...args) {
        if(id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}