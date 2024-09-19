async function register(event) {
    event.preventDefault();

    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatpassword").value;

    // Check if passwords match
    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user object
    var user = {
        name: name,
        email: email,
        password: password
    };

    // Retrieve users from local storage or initialize an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(user);

    // Save the updated array back to local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repeatpassword").value = "";

    // Display success message
    alert("Registration successful!");
}
