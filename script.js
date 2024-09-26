document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === "user" && password === "pass") {
        message.style.color = 'green';
        message.textContent = 'Sign in successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});
