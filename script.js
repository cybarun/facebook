
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Implement your login logic here
    // For simplicity, we'll just log the email and password for now
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);
});

document.getElementById("create-account").addEventListener("click", function(event) {
    event.preventDefault();
    // Implement your create account logic here
    // For now, we'll just log a message
    console.log("Create New Account clicked");
});
