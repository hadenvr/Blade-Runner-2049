fetch("https://api.giphy.com/v1/gifs/search?q=ryangosling&api_key=dc6zaTOxFJmzC&limit=4")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });

  function showGifs(data){
    for (var x = 0; x < data.length; x++) {
      var img = document.createElement('img');
      img.src = data[x].images.original.url;
      document.body.appendChild(img);
    }
  }
