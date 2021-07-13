<template>
  <div class="content">
    <HeaderComponent />
    <TrendsTvsComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/shared/Header.vue";
import TrendsTvsComponent from "./components/shared/TrendsTvs.vue";
import FooterComponent from "./components/shared/Footer.vue";

import {ref} from 'vue'
export default {
     components: { HeaderComponent,TrendsTvsComponent ,FooterComponent },
    setup() {


        return{
          
        }
        
    },
   
};

</script>


<style lang="scss">

</style>