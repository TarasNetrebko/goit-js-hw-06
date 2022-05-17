const input = document.querySelector("#validation-input");
const dataLength = document.querySelector("input[data-length]");

const countCheck = (event) => {
    if (event.target.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
    
};

input.addEventListener("blur", countCheck);