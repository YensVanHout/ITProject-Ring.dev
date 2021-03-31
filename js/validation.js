function validateName(input) {
    if (input.value == "Janco") {
        input.setCustomValidity('');
    } else {
        input.setCustomValidity('"' + input.value + '" is not a known name.');
    }
}

function validateSurname(input) {
    if (input.value == "Sambaer") {
        input.setCustomValidity('');
    } else {
        input.setCustomValidity('"' + input.value + '" is not a known name.');
    }
}

function validateBookingNumber(input) {
    if (input.value == "ABC123") {
        input.setCustomValidity('');
    } else {
        input.setCustomValidity('"' + input.value + '" is geen juist nummer.');
    }
}

function validateDate(input) {
    var vertrek = document.getElementById("inputDepartureDate");
    var eind = document.getElementById("inputEndDate");

    if (vertrek.value < eind.value) {
        eind.setCustomValidity('');
    } else {
        eind.setCustomValidity('Eind-datum dient na vertrekdatum te komen.');
    }
}