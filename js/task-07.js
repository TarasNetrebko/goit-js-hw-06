const inputRange = document.querySelector("#font-size-control");

const fontSizeChange = () => {
    document.querySelector("#text").style.fontSize = `${inputRange.value}px`;
}

inputRange.addEventListener("input", fontSizeChange);
