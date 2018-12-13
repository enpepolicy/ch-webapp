<template lang="html">
   <!-- Main UI -->
<!--   <div class="mt-3 mb-3">
     Submitted Names:
     <ul>
       <li v-for="n in names">{{n}}</li>
     </ul>
   </div>
 -->
   <!-- Modal Component -->
   <b-modal id="modalPrevent"
            ref="modal"
            title=""
            hide-header
            hide-footer>
              <div class="d-block text-center">
                    <h3>🚀 Actualízate en Politicas de Drogas 💊</h3>
            </div>

     <b-form @submit.stop.prevent="processForm">


        <b-form-input
        type="text"
        placeholder="Nombre"
        v-model="nombre"
        name="nombre">

        </b-form-input>
        <b-form-input
        type="text"
        placeholder="Correo Electronico"
        v-model="email"
        name="email">
        </b-form-input>

       </b-form>
    <b-btn class="mt-3" variant="success" block @click="processForm">¡Suscribirme!</b-btn>
    <b-btn class="mt-3" variant="danger" block @click="hideModal">¡En otra oportunidad sera!</b-btn>
   </b-modal>

</template>




<!--
<form action="https://colectivohofmann.us19.list-manage.com/subscribe/post" method="POST">

    <input type="hidden" name="u" value="d771d10e2492e79b49c3732a1">
    <input type="hidden" name="id" value="58eb09facf">

    <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">

    <input type="text" name="MERGE1" id="MERGE1" size="25" value="">


-->
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<!--
<div style="position: absolute; left: -5000px;" aria-hidden="true"><input tabindex="-1" name="b_d771d10e2492e79b49c3732a1_58eb09facf" type="text" value=""></div>
<div class="clear" style="text-align: center;"><input id="mc-embedded-subscribe" class="button" name="subscribe" type="submit" value="Suscribete!"></div>
</div>
</form></div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
<script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
-->

<!--End mc_embed_signup-->

<script>

export default {
  data () {
   return {
     nombre: '',
     email: ''
   }
 },
 methods: {
   hideModal () {
      this.$refs.modal.hide()
    },
   clearNombre () {
     this.nombre = ''
   },
   handleOk (evt) {
     // Prevent modal from closing
     evt.preventDefault()
     if (!this.name) {
       alert('Please enter your name')
     } else {
       this.handleSubmit()
     }
   },
   handleSubmit () {
     this.names.push(this.name)
     this.clearName()
     this.$refs.modal.hide()
   },
     processForm () {
      console.log({ name: this.nombre, email: this.email })
      this.clearNombre()
      this.$refs.modal.hide()
    }
 }
}
</script>

<style>

</style>
