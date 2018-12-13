<template lang="html">
  <div>
   <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
   <!-- Main UI -->
   <div class="mt-3 mb-3">
     Submitted Names:
     <ul>
       <li v-for="n in names">{{n}}</li>
     </ul>
   </div>
   <!-- Modal Component -->
   <b-modal id="modalPrevent"
            ref="modal"
            title="Submit your name"
            @ok="handleOk"
            @shown="clearName">
     <form @submit.stop.prevent="handleSubmit">
       <b-form-input type="text"
                     placeholder="Enter your name"
                     v-model="name"></b-form-input>
     </form>
   </b-modal>
 </div>
</template>




<!--
<div id="mc_embed_signup"><form id="mc-embedded-subscribe-form" class="validate" action="https://colectivohofmann.us19.list-manage.com/subscribe/post?u=d771d10e2492e79b49c3732a1&amp;id=58eb09facf" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
<div id="mc_embed_signup_scroll">
<h2 style="text-align: center;">Suscribete y recibe novedades</h2>
<div class="indicates-required" style="text-align: right;"><span class="asterisk">💥</span>Requerido</div>
<div class="mc-field-group"><label for="mce-EMAIL">Tu correo electronico <span class="asterisk">*</span>
</label>
<input id="mce-EMAIL" class="required email" name="EMAIL" type="email" value=""></div>
<div class="mc-field-group"><label for="mce-FNAME">Nombre </label>
<input id="mce-FNAME" class="" name="FNAME" type="text" value=""></div>
<div class="mc-field-group"><label for="mce-LNAME">Apellido </label>
<input id="mce-LNAME" class="" name="LNAME" type="text" value=""></div>
<div id="mce-responses" class="clear">
<div id="mce-error-response" class="response" style="display: none;"></div>
<div id="mce-success-response" class="response" style="display: none;"></div>
</div>
-->
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<!--
<div style="position: absolute; left: -5000px;" aria-hidden="true"><input tabindex="-1" name="b_d771d10e2492e79b49c3732a1_58eb09facf" type="text" value=""></div>
<div class="clear" style="text-align: center;"><input id="mc-embedded-subscribe" class="button" name="subscribe" type="submit" value="Suscribete!"></div>
</div>
</form></div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
-->
<!--End mc_embed_signup-->





<script>

export default {
 data () {
   return {
     name: '',
     names: []
   }
 },
 methods: {
   clearName () {
     this.name = ''
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
   }
 }
}
</script>

<style lang="css">
</style>
