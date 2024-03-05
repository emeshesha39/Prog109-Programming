document.addEventListener('DOMContentLoaded', function () {
    // Get form and error message element
    var form = document.getElementById('myform');
    var errorMessage = document.getElementById('errormessage');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Reset error message
        errorMessage.innerHTML = '';

        // Validate form fields
        var isValid = true;
        var firstName = form.elements['FirstName'].value.trim();
        var lastName = form.elements['LastName'].value.trim();
        var email = form.elements['EMail'].value.trim();
        var phone = form.elements['Phone'].value.trim();
        var address = form.elements['Address'].value.trim();
        var country = form.elements['Country'].value;

        // Validation for First Name
        if (firstName === '') {
            errorMessage.innerHTML += '<p>Please enter your first name.</p>';
            isValid = false;
        } else if (!isValidName(firstName)) {
            errorMessage.innerHTML += '<p>First name should only contain alphabetic characters.</p>';
            isValid = false;
        }

        // Validation for Last Name
        if (lastName === '') {
            errorMessage.innerHTML += '<p>Please enter your last name.</p>';
            isValid = false;
        } else if (!isValidName(lastName)) {
            errorMessage.innerHTML += '<p>Last name should only contain alphabetic characters.</p>';
            isValid = false;
        }

        // Validation for Email
        if (email === '') {
            errorMessage.innerHTML += '<p>Please enter your email address.</p>';
            isValid = false;
        } else if (!isValidEmail(email)) {
            errorMessage.innerHTML += '<p>Please enter a valid email address.</p>';
            isValid = false;
        }

        // Validation for Phone
        if (phone === '') {
            errorMessage.innerHTML += '<p>Please enter your phone number.</p>';
            isValid = false;
        } else if (!isValidPhone(phone)) {
            errorMessage.innerHTML += '<p>Please enter a valid phone number (only numbers and dashes are allowed).</p>';
            isValid = false;
        }

        // Validation for Address
        if (address === '') {
            errorMessage.innerHTML += '<p>Please enter your address.</p>';
            isValid = false;
        }

        // Validation for Country
        if (country === '000') {
            errorMessage.innerHTML += '<p>Please select your country.</p>';
            isValid = false;
        }

        // If form is valid, submit the form
        if (isValid) {
            return true; // Allow form submission
        } else {
            event.preventDefault(); // Prevent default form submission
            return false; // Prevent form submission
        }
    });

    // Function to validate email address
    function isValidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to validate phone number
    function isValidPhone(phone) {
        var re = /^[0-9-]+$/;
        return re.test(phone);
    }

    // Function to validate name (only alphabetic characters)
    function isValidName(name) {
        var re = /^[a-zA-Z]+$/;
        return re.test(name);
    }
});