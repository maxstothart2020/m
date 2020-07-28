const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "max and jadon" && password === "are the best") {
        window.location.href = 'https://maxstothart2020.github.io/secret-fence/css/font/kill/q/w/e/r/t/y/u/i/o/p/a/s/d/f/g/h/j/k/l/z/x/c/v/b/n/m/max.htm';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
