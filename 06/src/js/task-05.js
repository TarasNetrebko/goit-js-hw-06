const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

const currentInput = () => {
    if (input.value !== "") {
        return name.textContent = input.value;
    }
    return name.textContent = "Anonymous";
}

input.addEventListener("input", currentInput);