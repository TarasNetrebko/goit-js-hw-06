const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");

function addIngredients(vegs) {
  vegs.forEach(veg => {
    const ingredient = document.createElement("li");
    ingredient.textContent = veg;
    ingredient.classList.add("item");
    listOfIngredients.append(ingredient);
  })
}
addIngredients(ingredients);