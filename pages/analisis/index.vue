<template lang="html" >
  <!-- El contenedor se necesita para la funcionalidad de b-col y b-row-->
  <b-container>
    <b-row class="mt-4 mb-4">
      <b-col v-for="post in posts" md="4"  >
        <div v-for="imagenFt in post.imagenes">
          <b-card
          class="m-2 cartas"
          v-bind:img-src="imagenFt.source_url"
          img-top
          v-bind:img-alt="imagenFt.slug"
          bg-variant="light">
            <h4 id="tituloPost">{{post.titulo}}</h4>
            <p v-html="post.excerpt"></p>
            <b-button
            variant="outline-secondary"
            v-bind:href="post.link"
            id="botonCartas"
            align-self="center"
            class="btn-block">
            Leeme
            </b-button>
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
        posts: [],
        parametrosWPRestApi:{
          per_page: 16,
        },
      }
  },
  mounted (){
      this.cargarDatosPosts();
      console.log('Instancia Montada');
    },
  methods: {
      cargarDatosPosts(){
        axios
        .get('https://colectivohofmann.com/wp-json/wp/v2/posts/?_embed', {params: this.parametrosWPRestApi})
        .then(response =>{
            console.log(response.data);
          /*Creamos nuevo objeto solo con datos que necesitamos del JSON de WP*/
          /*Las imagenes se recorren dos veces porque tiene un array inserto*/
          const listado = response.data.map(post => {
            return{
              imagenes: post._embedded['wp:featuredmedia'],
              titulo: post.title.rendered,
              excerpt: post.excerpt.rendered,
              link: post.link,
              contenido: post.content.rendered,
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
<style scoped lang="css">
  #tituloPost{
    color: #0099CC;
  }
  #botonCartas{
  }
  .cartas{
    border-color: #F9DFF2;
  }
</style>
