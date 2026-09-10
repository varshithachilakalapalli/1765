function login() {
 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
 
    if (username === "admin" && password === "1234") {
 
        message.style.color = "green";
        message.innerHTML = "Login Successful!";
 
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);
 
    } else {
 
        message.style.color = "red";
        message.innerHTML = "Wrong username or password!";
 
    }
}
Embed Generator | Discord embeds without the hassle
Create embed messages for your Discord server with ease and give them your own branding using webhooks.
 