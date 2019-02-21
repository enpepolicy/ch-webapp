<template lang="html">

  <b-navbar :sticky="true" toggleable="sm" type="light">

    <b-navbar-brand to="/">
      <b-img  height="70" id="logoCH" src="/LogoCHConTexto.png" alt="Logo del Colectivo Hofmann"/>
    </b-navbar-brand>

    <b-navbar-toggle class="m-auto" target="nav_collapse">
    </b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse" >
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" >
        <b-nav-item to="/analisis" >Análisis</b-nav-item>
        <b-nav-item to="/team" >Team</b-nav-item>
        <b-nav-item-dropdown  text="Recursos" right>
          <b-dropdown-item to="/recursos/observatorio-de-twits-en-politica-de-drogas">Observatorio de twits en Politica de Drogas</b-dropdown-item>
          <b-dropdown-item to="/recursos/observatorio-de-articulos-cientificos">Observatorio de Articulos Cientificos</b-dropdown-item>
          <b-dropdown-item to="/recursos/enlaces-de-interes">Enlaces de Interes</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- Inicio suscripcion mailchimp -->
        <b-button
        v-b-modal.modalPrevent
        id="suscribeteBtn"
        href="http://eepurl.com/gbfiCf"
        >Suscribete!
        </b-button>
        <!--Fin de suscripcion mailchimp-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<style scoped>
  .navbar{
    background-color: white;
    border-bottom: 3px solid #e7e4e6;
  }
  #suscribeteBtn {
    background-color: #cc0099;
  }
</style>
<script>

export default {
  components: {

  }
}
</script>
