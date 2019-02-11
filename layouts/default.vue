<template >
  <div id="fondo">
    <Header/>
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
  background-color: #DFF2F9;
}
</style>
