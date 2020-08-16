const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.password.value;
    const password = Request.UserHostAddress;

    if (username === "Max" && password === "210.55.77.175") {
        window.location.href = 'https://maxstothart2020.github.io/secret-fence/css/font/kill/q/w/e/r/t/y/u/i/o/p/a/s/d/f/g/h/j/k/l/z/x/c/v/b/n/m/max.htm';
    }else if (username === "jadon" && password === "let there be light") {
        window.location.href = 'https://maxstothart2020.github.io/secret-fence/css/font/kill/q/w/e/r/t/y/u/i/o/p/a/s/d/f/g/h/j/k/l/z/x/c/v/b/n/m/jadon.htm';
    }else if (username === "luke" && password === "iamamazing") {
        window.location.href = 'https://maxstothart2020.github.io/secret-fence/css/font/kill/q/w/e/r/t/y/u/i/o/p/a/s/d/f/g/h/j/k/l/z/x/c/v/b/n/m/luke.htm';
    }else {
        loginErrorMsg.style.opacity = 1;
    }
})
