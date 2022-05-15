const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.target;
    const user = {
        email: email.value,
        password: password.value,
    }
    if (email.value === "" || password.value === "") {
        return alert("Будьласка, заповніть УСІ поля!");
    }
    console.log(user);
    event.target.reset();
}
