console.log("Budgettool gestart");
let currentIncome = 0;

function addIncome() {
  const incomeInput = document.getElementById("income");
  const incomeValue = parseFloat(incomeInput.value);
  if (!isNaN(incomeValue)) {
    currentIncome += incomeValue;
    document.getElementById("currentIncome").innerText = currentIncome.toFixed(2);
    incomeInput.value = "";
  } else {
    alert("Voer een geldig bedrag in!");
  }
}
