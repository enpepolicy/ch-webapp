axios
  .get('https://colectivohofmann.com/wp-json/wp/v2/posts')
  .then(function (response) {
    console.log(response);

    /*Entra a div por innerHTML*/
    var resultado = document.getElementById('holabb');
    resultado.innerHTML = (response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
