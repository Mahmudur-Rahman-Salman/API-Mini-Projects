// meal db api https://www.themealdb.com/api/json/v1/1/search.php?s=fish

const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    const mealsContainer = document.getElementById("meal-container");
    mealsContainer.innerHTML = "";

    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement("div");
        mealDiv.classList.add('col');
        mealDiv.innerHTML = ` 
        <div class="card" onclick="loadSingleMeal(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div  class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strCategory}</p>
                <p class="card-text">${meal.strArea}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 300)} ...........read more</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}


const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = "";
}

const loadSingleMeal = (idMeal) => {
    console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleMeal(data.meals[0]));
}

const displaySingleMeal = meal => {
    const singleMealContainer = document.getElementById("single-meal-container");
    singleMealContainer.innerHTML = ''; 

    const mealDiv = document.createElement("div");
    mealDiv.classList.add("card");
    mealDiv.innerHTML = ` 
            <img src="${meal.strMealThumb}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strCategory}</p>
                <p class="card-text">${meal.strArea}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 300)} ...........read more</p>
            </div>
    `;
    singleMealContainer.appendChild(mealDiv);
}

loadMeals("")
