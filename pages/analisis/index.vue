<template lang="html">
  <b-container >
    <h1>Analisís</h1>
    <b-row>
      <b-col v-for="post in posts" sm="6">
        <b-card
        v-bind:title="post.title.rendered"

        v-bind:img-src="post._embedded['wp:featuredmedia'][0].source_url"
        >

            <p v-html="post.excerpt.rendered"></p>
        </b-card>

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
  created (){
    axios
      .get('https://colectivohofmann.com/wp-json/wp/v2/posts/?_embed')
      .then(response =>{
        this.posts = response.data;


        console.log(this.posts[0]._embedded['wp:featuredmedia'][0].source_url);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
}
</script>
<style lang="css">
</style>
