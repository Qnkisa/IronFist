function validateForm(event) {
    event.preventDefault();
    var firstName = document.getElementsByName('firstName')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value.trim();
    var date = document.getElementsByName('date')[0].value;
    var hourMinute = document.getElementsByName('hourMinute')[0].value;
    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var hourMinuteRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    let isValid = true;

    if (!firstName || !lastName || !email || !password || !hourMinute || !date) {
        displayMessage("Please fill in all fields.");
        isValid = false;
    } else {
        if (!firstName.match(nameRegex) || !lastName.match(nameRegex)) {
            displayMessage("Invalid name. Please use only letters.");
            isValid = false;
        }
    
        if (!email.match(emailRegex)) {
            displayMessage("Invalid email format.");
            isValid = false;
        }
    
        if (!password.match(passwordRegex)) {
            displayMessage("Password should contain at least one small letter, one capital letter, one number, and one symbol.");
            isValid = false;
        }
    
        if (!hourMinute.match(hourMinuteRegex)) {
            displayMessage("Invalid time format. Please use HH:MM.");
            isValid = false;
        }
    }
    
    if (isValid) {
        document.forms[0].submit();
        displayMessage("Form submitted successfully!");
    }

    return false;
}

function displayMessage(message) {
    document.getElementById('validationMessage').innerText = message;
}