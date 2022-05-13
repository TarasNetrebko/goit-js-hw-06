const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");

// const potatoes = document.createElement("li");
// potatoes.textContent = ingredients[0];
// potatoes.class = "item";

// const mushrooms = document.createElement("li");
// mushrooms.textContent = ingredients[1];
// mushrooms.class = "item";

// const garlic = document.createElement("li");
// garlic.textContent = ingredients[2];
// garlic.class = "item";

// const tomatos = document.createElement("li");
// tomatos.textContent = ingredients[3];
// tomatos.class = "item";

// const herbs = document.createElement("li");
// herbs.textContent = ingredients[4];
// herbs.class = "item";

// const condiments = document.createElement("li");
// condiments.textContent = ingredients[5];
// condiments.class = "item";

// listOfIngredients.append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);

function addIngredients(vegs) {
  // const ings = [];
  for (let veg of vegs) {
    const ingredient = document.createElement("li");
    ingredient.textContent = veg;
    ingredient.class = "item";
    listOfIngredients.append(ingredient);
    // ings.push(ingredient);
  }
  // listOfIngredients.append(...ings);
}
addIngredients(ingredients);