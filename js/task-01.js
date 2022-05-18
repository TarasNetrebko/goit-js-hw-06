const categories = document.querySelector("#categories");
const items = [...categories.children];

const countCategories = () => {
    console.log("Number of categories:", items.length);
        items.forEach(el => {
            console.log("");
            console.log("Category:", el.querySelector("h2").textContent);
            console.log("Elements:", Number(el.querySelector("ul").children.length));
        }
    )
}
countCategories();