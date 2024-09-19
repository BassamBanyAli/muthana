async function login(event) {
    event.preventDefault();

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Search for a user with matching email and password
    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Successful login
        alert("Login successful!");
        window.location.href="index.html";
        
        // Redirect or perform other actions as needed
    } else {
        // Failed login
        alert("Invalid email or password. Please try again.");
    }

    // Clear form fields
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
