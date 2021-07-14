<template>
  <div class="content">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/shared/Header.vue";
import FooterComponent from "./components/shared/Footer.vue";

import {ref} from 'vue'
export default {
     components: { HeaderComponent,FooterComponent },
    setup() {


        return{
          
        }
        
    },
   
};

</script>


<style lang="scss">

</style>