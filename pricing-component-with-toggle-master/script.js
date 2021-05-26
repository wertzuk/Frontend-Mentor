const input = document.getElementById("checkbox");
const prices = document.querySelectorAll(".price");
console.log(prices[0].textContent);

input.addEventListener("change", () => {
  if (!input.checked) {
    prices[0].textContent = "199.99";
    prices[1].textContent = "249.99";
    prices[2].textContent = "399.99";
  } else {
    prices[0].textContent = "19.99";
    prices[1].textContent = "24.99";
    prices[2].textContent = "39.99";
  }
});
