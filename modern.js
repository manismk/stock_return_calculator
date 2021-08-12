var sliderPurchaseInput = document.querySelector("#purchaseInput");
var purchase = document.querySelector("#purchase");
var sliderQuantityInput = document.querySelector("#quantityInput");
var quantity = document.querySelector("#quantity");
var sliderCurrentInput = document.querySelector("#currentInput");
var current = document.querySelector("#current");

sliderPurchaseInput.oninput = function () {
  updateslider(sliderPurchaseInput, 10000, purchase);
};
sliderQuantityInput.oninput = function () {
  updateslider(sliderQuantityInput, 100, quantity);
};
sliderCurrentInput.oninput = function () {
  updateslider(sliderCurrentInput, 10000, current);
};

function updateslider(slider, maxValue, spanName) {
  var value = slider.value;
  spanName.innerText = slider.value;
  value = (value / maxValue) * 100;

  slider.style.background = `linear-gradient(to right, red 0%, red ${value}%, grey ${value}%, grey 100%)`;
}

var xValues = ["Italy", "France"];
var yValues = [55, 49];
var barColors = ["#b91d47", "#00aba9"];

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
