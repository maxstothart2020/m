const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Max" && password === "memory allways prospers") {
        window.location.href = 'https://maxstothart2020.github.io/secret-fence/css/font/kill/q/w/e/r/t/y/u/i/o/p/a/s/d/f/g/h/j/k/l/z/x/c/v/b/n/m/max.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
