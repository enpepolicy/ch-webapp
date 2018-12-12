<template lang="html">
  <footer class="">
  <div
class="d-flex justify-content-center"
  ><router-link
  class="linkPoliticaDePrivacidad"
    to="/politica-de-privacidad">
    <em>Política de Privacidad</em>
  </router-link></div>
    <div
    class="text-center">
    &copy; {{ new Date().getFullYear() }} — <strong>Colectivo Hofmann</strong>
  </div>
  </footer>

</template>

<script>
</script>

<style scoped>

footer{
  background-color: #cc0099;
  color:white;
  padding: 20px;}

.linkPoliticaDePrivacidad
  {    text-decoration: none;
      color: white;
  }
</style>
