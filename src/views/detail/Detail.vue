<template>
 <div class="detail">
   <div class="detail__image">
     <img src="../../assets/img/bliss.png" alt="Detail İmage" class="detail__img">
   </div>
   <div class="detail__content">
     <div class="detail__title">
       BLİSS
     </div>
     <div class="detail__text">
       Bliss, Mike Cahill tarafından yazılan ve yönetilen 2021 Amerikan 
      bilim kurgu drama filmidir. Owen Wilson ve Salma Hayek rol 
      alıyor. Yakın zamanda boşanmış ve ailesinden uzaklaşmış 
      orta yaşlı bir adam, mutsuz bir işten kovulduğunda psikotik bir 
      kırılma yaşar.
     </div>
     <div class="detail__raiting-box">
       <div class="detail__raiting">
         <div class="detail__raiting-text">
           Raiting : <img src="../../assets/svg/star.svg" alt="Raiting Star" > 7.0

         </div>
         <div class="detail__release-date">
           Gösterim Yılı : 2021

         </div>
       </div>
     </div>
     <div class="detail__bottom">
        Oyuncular : Salma Hayek, Owen Wilson, Madeline Zima, 
      Nesta Cooper
     </div>

   </div>
 </div>
</template>

<script>


export default {

  setup() {
  
    return {
      
    };
  },
};
</script>


<style lang="scss">
.detail{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 10px;
  &__img{
   min-width: 300px;
  }
  &__content{
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 15px;
  }
  &__title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $yellow;
    min-height: 80px;
    padding: 5px;
    @include font-size(24);
    font-weight: 600;

  }
  &__text{
    display: flex;
    flex-direction: column;
    color:  $white;
    @include font-size(18);

  }
}
</style>