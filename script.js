const users = {}; 

function register() {
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;

    if (registerUsername && registerPassword) {
        users[registerUsername] = registerPassword;
       alert("Registration successful! You can now login.");
    } else {
        alert("Please fill in both username and password.");
    }
}

function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (users[loginUsername] === loginPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}



