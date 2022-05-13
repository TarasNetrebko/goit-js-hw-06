const refs = {
    categories: document.querySelector("#categories"),
};
const items = [...refs.categories.children];

console.log("Number of categories:", items.length);
console.log("");
console.log("Category:", items[0].querySelector("h2").textContent);
console.log("Elements:", Number(items[0].querySelector("ul").children.length));
console.log("");
console.log("Category:", items[1].querySelector("h2").textContent);
console.log("Elements:", Number(items[1].querySelector("ul").children.length));
console.log("");
console.log("Category:", items[2].querySelector("h2").textContent);
console.log("Elements:", Number(items[2].querySelector("ul").children.length));
