// select elements
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const inputUnit = document.querySelector("#inputUnit");

// event listeners
input.addEventListener("keyup", unitConverter);
inputUnit.addEventListener("change", unitConverter);

// default output value
output.value = "0.00";

// define function
function unitConverter() {
  // get input value from user
  let inputUnitValue = inputUnit.value;

  // convert unit based on selected unit options
  if (inputUnitValue === "Fahrenheit to Celcius" && input.value !== "") {
    // also check that input field is not empty (!impt)
    let celcius = (input.value - 32) / 1.8;
    output.value = celcius.toFixed(1);
  } else if (inputUnitValue === "Miles to Kilometers") {
    let km = input.value * 1.609;
    output.value = km.toFixed(2);
  } else if (inputUnitValue === "Pounds to Kilograms") {
    let kg = input.value * 0.4536;
    output.value = kg.toFixed(2);
  } else if (inputUnitValue === "Gallons to Litres") {
    let gallon = input.value * 0.22;
    output.value = gallon.toFixed(2);
  } else {
    output.value = "0.00";
  }
}
