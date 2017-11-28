var input = document.querySelector('#user-gif-search');
var searchBtn = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-result-container');

function findGifs() {
  fetch('https://api.giphy.com/v1/gifs/search?q=blade+runner+2049&api_key=dc6zaTOxFJmzC&limit=5')
  .then(function(response) {
  return response.json();
})
  .then(function(response) {
  showGifs(response.data);
});
}
//Closes the findGifs function

function showGifs(data) {
  for (var x = 0; x < data.length; x++) {
    var img = document.createElement('img');
    img.src = data[x].images.original.url;
    document.body.appendChild(img);
  }
}

if (input && searchBtn && gifContainer) {
  searchBtn.addEventListener('click', function() {
    var userInput = input.value;
    if (userInput !== '') {
      findGifs(userInput);
    }

  })
}
