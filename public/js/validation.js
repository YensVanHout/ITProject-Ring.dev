function validateBookingNumber(input) {
  if (input.value == "12638320" || "50394767"|| "90406893" || "61198716" ) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity('"' + input.value + '" is geen juist nummer.');
  }
}

function validateDate(input) {
  let vertrek = document.getElementById("inputDepartureDate");
  let eind = document.getElementById("inputEndDate");

  if (vertrek.value < eind.value) {
    eind.setCustomValidity("");
  } else {
    eind.setCustomValidity("Eind-datum dient na vertrekdatum te komen.");
  }
}
