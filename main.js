document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    const username = document.getElementById("login-username");
    const user = username.value;
    const password = document.getElementById("login-password");
    const pass = password.value;
    if (user === "admin" && pass === "admin") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password");
    }
    event.preventDefault();
  });
