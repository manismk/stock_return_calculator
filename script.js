var purchase = document.querySelector("#purchase");
var quantity = document.querySelector("#quantity");
var current = document.querySelector("#current");
var stockForm = document.querySelector("#stockForm");
var result = document.querySelector(".result");
var image = document.querySelector(".image");
var container = document.querySelector(".container");

stockForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var purchaseAmount = parseFloat(purchase.value);
  var quantityInt = parseInt(quantity.value);
  var currentAmount = parseFloat(current.value);
  returnAmount = currentAmount - purchaseAmount;
  //console.log(returnAmount);
  if (returnAmount < 0) {
    /*Loss*/
    returnAmount = Math.abs(returnAmount);
    var lossPercentage = (returnAmount / purchaseAmount) * 100;
    var lossAmount = returnAmount * quantityInt;
    result.innerText = `You lost ${lossPercentage.toFixed(
      2
    )}%. Your total loss is Rs.${lossAmount.toFixed(2)}`;
    result.style.color = "#DC2626";
    if (lossPercentage >= 50) {
      image.setAttribute("src", "images/loss.webp");
      container.style.backgroundColor = "#FECACA";
    } else {
      image.setAttribute("src", "images/bg.jpg");
      container.style.backgroundColor = "#f3f4f6";
    }
  } else {
    /*Profit */
    returnAmount = Math.abs(returnAmount);
    var profitPercentage = (returnAmount / purchaseAmount) * 100;
    var profitAmount = returnAmount * quantityInt;
    result.innerText = `You gained ${profitPercentage.toFixed(
      2
    )}%. Your total profit is Rs.${profitAmount.toFixed(2)}`;
    result.style.color = "#059669";
    if (profitPercentage >= 50) {
      image.setAttribute("src", "images/profit.webp");
      container.style.backgroundColor = "#A7F3D0";
    } else {
      image.setAttribute("src", "images/bg.jpg");
      container.style.backgroundColor = "#f3f4f6";
    }
  }
});
