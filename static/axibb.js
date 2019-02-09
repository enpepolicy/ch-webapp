var posts = []

axios.get('https://colectivohofmann.com/wp-json/wp/v2/posts')
  .then(function (response) {


    this.posts = (response.data);
    console.log(posts);
    return posts;

    /*Entra a div por innerHTML
    var wppostabstract = document.getElementById('holabb');
    wppostabstract.innerHTML = (response.data[4].content.rendered);

    var wpposttitle = document.getElementById('wpTitle');
    wpposttitle.innerHTML = (response.data[0].title.rendered);*/
  })
  .catch(function (error) {
    console.log(error);
  })
