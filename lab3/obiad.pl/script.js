const btn = document.querySelector("#title");
const recipes = document.querySelector("section");
let listofRecipes = document.querySelectorAll("article");

function addRecipe(nazwa, algorytm, skladniki, url) {
    let listOfIngredients = skladniki.split(",");
    listOfIngredients = listOfIngredients.map(ing => ing.trim());
    let listOfActions = algorytm.split(",");
    listOfIActions = listOfActions.map(act => act.trim());

    let recipe = document.createElement("article");
    let action = document.createElement("div");
    let readmore = document.createElement("div");
    readmore.classList.add("readmore");
    let h1 = document.createElement("h1");
    h1.innerHTML = "Read More";
    readmore.appendChild(h1);
    let btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.innerHTML = "<img src='img/delete.png' style='width: 40px;'>";
    btn.addEventListener("click", e => {
        e.stopPropagation();
        recipes.removeChild(recipe);
    });
    let img = document.createElement("img");
    let div = document.createElement("div");
    img.src = url;
    let h3 = document.createElement("h3");
    h3.innerHTML = nazwa;
    const ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");
    const h2ing = document.createElement("h2");
    h2ing.innerHTML = "składniki:";
    ingredients.appendChild(h2ing);
    const uling = document.createElement("ul");
    listOfIngredients.forEach((ing, index) => {
        const li = document.createElement("li");
        li.innerHTML = ing;
        if(index < 5) uling.appendChild(li);
    });
    ingredients.appendChild(uling);
    action.appendChild(ingredients);
    div.appendChild(h3);
    div.appendChild(ingredients);

    recipe.classList.add("article");
    recipe.appendChild(readmore);
    recipe.appendChild(img);
    recipe.appendChild(div);
    recipe.appendChild(btn);
    const algorithm = document.createElement("div");
    algorithm.classList.add("algorithm");
    const h2alg = document.createElement("h2");
    h2alg.innerHTML = "przepis:";
    algorithm.appendChild(h2alg);
    const ulalg = document.createElement("ul")
    listOfActions.forEach((alg, index) => {
        const li = document.createElement("li");
        li.innerHTML = alg;
        if(index < 5) ulalg.appendChild(li);
    })
    algorithm.appendChild(ulalg);
    recipe.appendChild(algorithm);

    recipe.tl2 = new TimelineMax({ paused: true, reversed: true });
  recipe.tl2
    .fromTo(recipe.childNodes[1], 0.35, { y: 0 }, { y: "-100%" })
    .fromTo(recipe.childNodes[2], 0.35, { y: 0 }, { y: "-110%" })
    .fromTo(recipe.childNodes[4], 0.35, { y: 0 }, { y: "-160%" }, "0.35");

  recipe.addEventListener("click", () => {
    listofRecipes.forEach(rec => {
      if (rec != recipe) rec.tl2.reversed() ? null : rec.tl2.reverse();
    });
    recipe.tl2.reversed() ? recipe.tl2.play() : recipe.tl2.reverse();
  });
  listofRecipes = [...listofRecipes, recipe];
  recipes.appendChild(recipe);
}

const listOfButtons = document.querySelectorAll(".btn-remove");
listOfButtons.forEach(btn =>
  btn.addEventListener("click", e => {
    e.stopPropagation();
    recipes.removeChild(btn.parentNode);
  })
);

const submitBtn = document
    .querySelector("#sendForm")
    .addEventListener("click", e => {
      e.preventDefault();

      const nazwa = document.querySelector("#dishNameForm");

      const algorytm = document.querySelector("#recipeForm");

      const skladniki = document.querySelector("#ingredientsForm");

      const url = document.querySelector("#imgurlForm");

      addRecipe(nazwa.value, algorytm.value, skladniki.value, url.value);

      nazwa.value = "";
      skladniki.value = "";
      algorytm.value = "";
      url.value = "";
  });

  document.querySelector("#clearForm").addEventListener("click", () => {
    const algorytm = document.querySelector("#recipeForm");
    const skladniki = document.querySelector("#ingredientsForm");
    const url = document.querySelector("#imgurlForm");
    const nazwa = document.querySelector("#dishNameForm");
    algorytm.value = "";
    skladniki.value = "";
    url.value = "";
    nazwa.value = "";
  });

  listofRecipes.forEach(recipe => {
    recipe.tl2 = new TimelineMax({ paused: true, reversed: true });
    recipe.tl2
      .fromTo(recipe.childNodes[3], 0.35, { y: 0 }, { y: "-100%" })
      .fromTo(recipe.childNodes[5], 0.35, { y: 0 }, { y: "-110%" })
      .fromTo(recipe.childNodes[9], 0.35, { y: 0 }, { y: "-160%" }, "0.35");
    recipe.addEventListener("click", () => {
      console.log(recipe.childNodes);
      listofRecipes.forEach(rec => {
        if (rec != recipe) rec.tl2.reversed() ? null : rec.tl2.reverse();
      });
      recipe.tl2.reversed() ? recipe.tl2.play() : recipe.tl2.reverse();
    });
  });