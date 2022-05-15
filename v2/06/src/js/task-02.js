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
  const array = [];
  vegs.forEach(veg => {
    const ingredient = document.createElement("li");
    ingredient.textContent = veg;
    ingredient.classList.add("item");  
    array.push(ingredient);
  })
  listOfIngredients.append(...array);
}
addIngredients(ingredients);