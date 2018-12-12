<template lang="html">

  <b-navbar sticky="true" toggleable="sm" type="light" class="navbar align-items-center">

    <b-navbar-toggle class="m-auto" target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <b-img height="80" id="logoCH" src="/LogoCH.png" alt="Logo del Colectivo Hofmann"/>
      Colectivo Hofmann</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">



      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

          <b-nav-item to="/analisis" >Análisis</b-nav-item>
          <b-nav-item to="/team" >Team</b-nav-item>

        <b-nav-item-dropdown  text="Recursos" right>
          <b-dropdown-item to="/recursos/observatorio-de-twits-en-politica-de-drogas">Observatorio de Articulos Cientificos</b-dropdown-item>
          <b-dropdown-item to="/recursos/observatorio-de-articulos-cientificos">Observatorio de twits en Politica de Drogas</b-dropdown-item>
          <b-dropdown-item to="/recursos/enlaces-de-interes">Enlaces de Interes</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item class="" ><b-button to="#">Suscribete</b-button></b-nav-item>
          <!-- volver esto un modal -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<style scoped>
  .navbar{
    background-color: white;
    border-bottom: 2px solid #e7e4e6;
  }
  #logoCH{

  }


</style>
