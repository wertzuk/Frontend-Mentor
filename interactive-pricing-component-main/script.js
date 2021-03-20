const slider = document.getElementById("slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");
const month = document.querySelector(".month");
const checkbox = document.getElementById("checkbox");

let isChecked = false;
let prices = [8.00, 12.00, 16.00, 24.00, 36.00];

function computePrice (cost, discount) {
    return `$${(cost * discount).toFixed(2)}`;
}

checkbox.addEventListener('click', () => {
    isChecked = checkbox.checked;
    let discount = 1;
    if(isChecked) {
        discount = 0.75;
    }
    updatePrices(slider.value, discount);
});

slider.oninput = function() {
    let progress = 100 - this.value;
    let discount = 1;
    if(isChecked) {
        discount = 0.75;
    }
    slider.style.background = `linear-gradient(to left, hsl(224, 65%, 95%) ${progress}%, hsl(174, 77%, 80%) ${progress}%)`;
    updatePrices(this.value, discount);
};

function updatePrices (progress, discount) {
    if(progress < 20) {
        pageviews.innerText = "10K PAGEVIEWS";
        price.innerText = computePrice(prices[0], discount);
    }
    else if (progress < 40) {
        pageviews.innerText = "50K PAGEVIEWS";
        price.innerText = computePrice(prices[1], discount);
    }
    else if (progress < 60) {
        pageviews.innerText = "100K PAGEVIEWS";
        price.innerText = computePrice(prices[2], discount);
    }
    else if (progress < 80) {
        pageviews.innerText = "500K PAGEVIEWS";
        price.innerText = computePrice(prices[3], discount);
    }
    else {
        pageviews.innerText = "1M PAGEVIEWS";
        price.innerText =computePrice(prices[4], discount);
    }
}

