const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");
  const vegs = ingredients.map(veg => {
    const ingredient = document.createElement("li");
    ingredient.textContent = veg;
    ingredient.classList.add("item");
    return ingredient;
  })
  listOfIngredients.append(...vegs);

