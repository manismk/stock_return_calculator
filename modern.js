var sliderPurchaseInput = document.querySelector("#purchaseInput");
var purchase = document.querySelector("#purchase");
var sliderQuantityInput = document.querySelector("#quantityInput");
var quantity = document.querySelector("#quantity");
var sliderCurrentInput = document.querySelector("#currentInput");
var current = document.querySelector("#current");

var xValues = ["Invested", "Current"];
var yValues = [1, 1];
var barColors = ["#b91d47", "#00aba9"];

sliderPurchaseInput.oninput = function () {
  updateslider(sliderPurchaseInput, 10000, purchase);
};
sliderQuantityInput.oninput = function () {
  updateslider(sliderQuantityInput, 100, quantity);
};
sliderCurrentInput.oninput = function () {
  updateslider(sliderCurrentInput, 10000, current);
};
window.onload = function () {
  updateslider();
};

function updateslider(slider, maxValue, spanName) {
  if (slider) {
    var value = slider.value;
    spanName.innerText = slider.value;
    value = (value / maxValue) * 100;

    slider.style.background = `linear-gradient(to right, red 0%, red ${value}%, grey ${value}%, grey 100%)`;
  }

  var purchaseValue = sliderPurchaseInput.value;
  var quantityValue = sliderQuantityInput.value;
  var currentValue = sliderCurrentInput.value;
  var purchaseAmount = purchaseValue * quantityValue;
  var currentAmount = currentValue * quantityValue;

  yValues = [purchaseAmount, currentAmount];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
  });
}
