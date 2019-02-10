<template lang="html">
  <!-- El contenedor se necesita para la funcionalidad de b-col y b-row-->
  <b-container >
    <b-row class="mt-4">
      <b-col v-for="post in posts" md="4"  >
        <div v-for="imagenFt in post.imagenes" >



        <b-card
        class="m-2"
        v-bind:title="post.titulo"
        v-bind:img-src="imagenFt.source_url"
        img-top
        v-bind:img-alt="imagenFt.slug"
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
      this.cargarDatosPosts();
      console.log('Instancia Montada');
    },
  methods: {
      cargarDatosPosts(){
        axios
          .get('https://colectivohofmann.com/wp-json/wp/v2/posts/?_embed')
          .then(response =>{
            console.log(response.data);
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
    },
}
</script>
<style lang="css">

</style>
