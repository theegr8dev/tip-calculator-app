const percent = document.querySelector(".percent");
let selectedPercent;

const btnCustom = document.querySelector(".custom");
const billValue = document.querySelector(".bill__input");
const peopleValue = document.querySelector(".people__input");

const labelTip = document.querySelector(".tip__amount");
const labelTotal = document.querySelector(".total__amount");

const btnReset = document.querySelector(".reset");

function Formula(percentAmount) {
  if (Number(peopleValue.value) > 0) {
    peopleValue.style.border = "none";
    document.querySelector(".error").textContent = "";
    // Formaula for total amount per person
    const totalAmount =
      (percentAmount * Number(billValue.value)) / Number(peopleValue.value);
    labelTip.textContent = totalAmount.toFixed(2);

    // Formaula for tip amount per person
    const tipAmount =
      (Number(billValue.value) * (percentAmount + 1)) /
      Number(peopleValue.value);
    labelTotal.textContent = tipAmount.toFixed(2);
  } else {
    peopleValue.style.border = " 3px solid orangered";
    document.querySelector(".error").textContent = "Cant't be Zero";
  }
}
// Performing event delegation
percent.addEventListener("click", function (event) {
  const target = event.target;
  const percentAmount = parseInt(target.textContent || 0) / 100;
  Formula(percentAmount);

  if (
    target.classList.contains("percent__btn") &&
    Number(peopleValue.value) > 0
  ) {
    select(target);
    if (btnCustom) {
      btnCustom.value = "";
    }
  }
});

function select(ele) {
  if (selectedPercent) {
    selectedPercent.style.backgroundColor = "hsl(183, 100%, 15%)";
  }
  selectedPercent = ele;
  selectedPercent.style.backgroundColor = "hsl(172, 67%, 45%)";
}

btnCustom.addEventListener("keypress", function (event) {
  if (selectedPercent)
    selectedPercent.style.backgroundColor = "hsl(183, 100%, 15%)";

  if (event.key == "Enter") {
    const percentAmount = Number(btnCustom.value / 100);
    Formula(percentAmount);
  }
});

btnReset.addEventListener("click", function () {
  billValue.value = "";
  peopleValue.value = "";
  labelTip.textContent = "0.00";
  labelTotal.textContent = "0.00";
  btnCustom.value = 0;
  if (selectedPercent) {
    selectedPercent.style.backgroundColor = "hsl(183, 100%, 15%)";
  }
});
