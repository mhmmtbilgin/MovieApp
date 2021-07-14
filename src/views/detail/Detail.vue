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
  margin: 40px 12px;
  
  @include mq("mobile",max){
      flex-direction: column;
    }

  &__image{
  
     @include mq("mobile",max){
      display: flex;
      justify-content: center;
      margin: 10px;
    }
  }
  &__img{
   min-width: 300px;

   @include mq("tablet",max){
      min-width: 90%;
      
    }
  @include mq("mobile",max){
      flex-direction: column;
      min-width: 90%;
        
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 15px;
    @include mq("mobile",max){
      flex-direction: column;
      padding: 18px;
      margin: 0;
      
    }
    
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

     @include mq("mobile",max){
     min-height: 60px;
      
    }
     
    

  }
  &__text{
    display: flex;
    flex-direction: column;
    color:  $white;
    @include font-size(18);
    padding: 50px;

  }
  &__raiting{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:$white;
    margin: 10px;
    padding: 40px;
    border-bottom: 1px solid $white;
    @include mq("mobile",max){
      flex-direction: column;
      
    }
    

  }
  &__bottom{
    padding: 50px;
    color:$white;
  }
}
</style>