<template lang="html">
  <div class="">
<a class="twitter-timeline" href="https://twitter.com/EnriqueAPea1/lists/actores-pol-ticas-drogas?ref_src=twsrc%5Etfw">A Twitter List by EnriqueAPea1</a>
  </div>

</template>

<script>
export default {
  mounted () {
  console.log('helloooo');
  this.montarTwits();
},
  methods: {
    montarTwits(){
      async src="https://platform.twitter.com/widgets.js" charset="utf-8";

    }
  }
}
</script>

<style lang="css">
</style>
