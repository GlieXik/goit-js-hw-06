let counterValue = 0;
const Value = document.querySelector("#value");
const plus = document.querySelector("[data-action='decrement']");
const minus = document.querySelector("[data-action='increment']");
console.log(Value);
console.log(plus);
const decrement = () => {
  counterValue -= 1;
  Value.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  Value.textContent = counterValue;
};
plus.addEventListener("click", decrement);
minus.addEventListener("click", increment);
