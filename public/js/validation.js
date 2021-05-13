function validateBookingNumber(input) {
  if (input.value == "ABC123") {
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
