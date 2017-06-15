function bakeMe(searchCrit){
  document.querySelector('.foods').textContent='Searching... for ' + searchCrit;
  fetch("http://www.weeatt.com/api/v1/recipes?qs=" + searchCrit + "&auth_token=aDZTf4BdHGA1apkeU0UY",{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': '72f54c000aa4'
    }
    })
    .then( function(r) {
      return r.json()
    })
    .then( function(json){
      console.log(json)

      for(var i = 0; i < json.results.length; i++){
        var recipeTitle = json.results[i].name

        console.log(json.results[i].images)
        if (json.results[i].images.length > 0){
          var pic = json.results[i].images[0].large_image_path
        }else{
          var pic = 'http://i.imgur.com/UetO7dI.jpg'
        }


        var html = `
          <div class="food-wrapper">
            <div class='image'>
              <img src="${pic}">
            </div>
            <div class="recipe-title">
              <span>${recipeTitle}</span>
            </div>
          </div>
        `
        document.querySelector('.foods').textContent='';
        document.querySelector('.foods').insertAdjacentHTML('afterbegin', html)

    }
    })
}

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  let searchContent = document.querySelector('#search-bar').value;
  bakeMe(searchContent);
  console.log(searchContent);
  console.log('form submit');
})
