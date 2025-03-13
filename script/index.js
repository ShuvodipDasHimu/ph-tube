function loadCategories(){
  // 1 - fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  // 2 - convert promise to json
  .then((res)=>res.json())
  // 3 - send data to displayCategories
  .then((data)=>displayCategories(data.categories));
}

function displayCategories(categories){
  // get the container
  const categoryContainer = document.getElementById("category-container");

  // Loop operation on Array of object
  for(let cat of categories){
    // create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // Append the Element
    categoryContainer.appendChild(categoryDiv)
  }
}

loadCategories();