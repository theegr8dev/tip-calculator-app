const btnFive = document.querySelector(".five");
const btnTen = document.querySelector(".ten");
const btnFifteen = document.querySelector(".fifteen");
const btnTwentyFive = document.querySelector(".twenty-five");
const btnFifty = document.querySelector(".fifty");
const btnCustom = document.querySelector(".custom");
const percent = [btnFive, btnTen, btnFifteen, btnTwentyFive, btnFifty];

const billValue = document.querySelector(".bill__input");
const peopleValue = document.querySelector(".people__input");

const labelTip = document.querySelector(".tip__amount");
const labelTotal = document.querySelector(".total__amount");

const btnReset = document.querySelector(".reset");

function Formula(percentAmount) {
  if (Number(peopleValue.value) > 0) {
    peopleValue.style.border = "none";
    document.querySelector(".error").textContent = "";

    const totalAmount =
      (percentAmount * Number(billValue.value)) / Number(peopleValue.value);
    labelTip.textContent = parseFloat(totalAmount.toFixed(2));

    const tipAmount =
      (Number(billValue.value) * (percentAmount + 1)) /
      Number(peopleValue.value);
    labelTotal.textContent = parseFloat(tipAmount.toFixed(2));
  } else {
    peopleValue.style.border = " 3px solid orangered";
    document.querySelector(".error").textContent = "Cant't be Zero";
  }
}
percent.forEach(function (per) {
  per.addEventListener("click", function () {
    const percentAmount = Number(per.textContent.slice(0, -1) / 100);
    Formula(percentAmount);
    if (Number(peopleValue.value) > 0) {
      per.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
  });
});

btnCustom.addEventListener("click", function () {
  const percentAmount = Number(btnCustom.value / 100);
  Formula(percentAmount);
});

btnReset.addEventListener("click", function () {
  billValue.value = "";
  peopleValue.value = "";
  labelTip.textContent = "0.00";
  labelTotal.textContent = "0.00";
  btnCustom.value = "";
  percent.forEach((per) => (per.style.backgroundColor = "hsl(183, 100%, 15%)"));
});
