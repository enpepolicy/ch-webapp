<template lang="html">
  <b-container >
    <h1>Analisís</h1>
    <b-row>
      <b-col v-for="post in posts" sm="6">
<div       v-for="imagenFt in post.imagenes">
        <b-card
        v-bind:title="post.titulo"

        v-bind:img-src="imagenFt.source_url"
        >

        <p v-html="post.excerpt"></p>
        </b-card>
</div>
      </b-col> 
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
  data (){
      return {
        posts: []
      }
  },
  mounted (){
/*    axios
      .get('https://colectivohofmann.com/wp-json/wp/v2/posts/?_embed')
      .then(response =>{
        this.posts = response.data;


        console.log(this.posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url);
      })
      .catch(function (error) {
        console.log(error);
      }) */

      this.cargarDatosPosts();
      console.log('Instancia Montada');
    },
    methods: {
      cargarDatosPosts(){
        axios
          .get('https://colectivohofmann.com/wp-json/wp/v2/posts/?_embed')
          .then(response =>{
          /*Creamos nuevo objeto solo con datos que necesitamos del JSON de WP*/
          const listado = response.data.map(post => {
            return{
              imagenes: post._embedded['wp:featuredmedia'],
              titulo: post.title.rendered,
              excerpt: post.excerpt.rendered,
            }
          });
          this.posts = listado;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
}
</script>
<style lang="css">
</style>
