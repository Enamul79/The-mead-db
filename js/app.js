const searchFood = () =>{
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // console.log(searchText);
   searchField.value = '';
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => displaySearchResult(data.meals))
   
}
const displaySearchResult = meals =>{
   // console.log(meals);
   const searchResult = document.getElementById('search-result');
   meals.forEach(meal =>{
      console.log(meal);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
         <div class="card">
            <img class="font-monospace" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title font-monospace fs-3 text">${meal.strMeal}</h5>
               <p class="card-text font-monospace">${meal.strInstructions.slice(0,250)}</p>
            </div>
         </div>
      `;
      searchResult.appendChild(div)
   })
}

