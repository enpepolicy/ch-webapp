<template >
  <div id="fondo">
    <Header/>
<!--    <img src="patron1Recurso1.svg" > -->
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
#fondo {
  background-image:url("/patronXGris.svg");
  background-repeat: repeat;
  background-size: 2em;
  background-attachment: fixed;
}
</style>
