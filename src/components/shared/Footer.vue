<template>
  <footer class="footer">
    <div class="footer__menu">
			<a href="" class="footer__link">Kupon Kodu</a>
      <a href="" class="footer__link">Gizlilik Politikası</a>
      <a href="" class="footer__link">Çerez Politikası</a>
		</div>
    <div class="footer__social">
			<div class="footer__facebook">
        	<img src="../../assets/svg/icons/facebook.svg" alt="facebook">
			</div>
			<div class="footer__twitter">
					<img src="../../assets/svg/icons/twitter.svg" alt="twitter">
			</div>
      <div class="footer__insta">
				<img src="../../assets/svg/icons/insta.svg" alt="insta">
			</div>
      <div class="footer__youtube">
					<img src="../../assets/svg/icons/youtube.svg" alt="youtube">
			</div>
      
		</div>
		<div class="footer__contact">
      <div class="footer__mail">
        <img src="../../assets/svg/icons/mail.svg" alt="mail" >
        <a href="#" class="footer__link">muhammetbilgin@gmail.com</a>
      </div>
      <div class="footer__address">
        <img src="../../assets/svg/icons/map-pin.svg" alt="adres">
        <a href="#" class="footer__link">İstanbul, Türkiye</a>
      </div>
      <div class="footer__phone">
        <img src="../../assets/svg/icons/phone.svg" alt="mail" >
        <a href="#" class="footer__link">0530 000 00 00</a>
      </div>
      <div class="footer__copy-right">
        <p class="footer__link">Copyright © 2021 Tüm Hakları Saklıdır.</p>
      </div>
			
		</div>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {


    return { 

     };
  },
};
</script>

<style lang="scss">

.footer {
    display: flex;
    flex-direction: row;
    min-width: 1300px;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    background-color: #FFCB14;
    
		@include mq("desktop",max) {
			min-width: calc(100%/1);
			height: 170px;
			margin: 10px 0 10px 0;
	
		}
	
		

		@include mq("tablet",max) {	
			min-width: calc(100%/10);
		

		}
		@include mq("mobile",max) {	
				height: 70px;
        
        
			


		}

		&__menu{
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include mq("desktop", max) {
			min-width: calc(100%/4);

			
		}
    @include mq("tablet", max) {
			min-width: calc(100%/6);

			
		}
    @include mq("mobile", max) {
			min-width: calc(100%/6);

			
		}
    
		}
    &__link{
      text-decoration: none;
      @include font-size(14);
      color:black;
      font-weight: 600;
      margin-top: 10px;
    @include mq("desktop", max) {
      @include font-size(14);
       margin-top: 8px;
   

			
		}
    @include mq("tablet", max) {
      @include font-size(12);
       margin-top: 8px;
   

			
		}
    @include mq("mobile", max) {
			
      @include font-size(10);
       margin-top: 6px;
       

			
		}
    }
    &__social{
      display: flex;
      flex-direction: row;
      justify-content: center;
   
    }
    &__contact{
      display: flex;
      flex-direction: column;
      justify-content: center;
    
    }
    &__mail, &__address, &__phone, &__copy-right{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin: 10px;
    @include mq("desktop", max) {
			 margin: 6px;

			
		}
    @include mq("tablet", max) {
		 margin: 4px;
   

			
		}
    @include mq("mobile", max) {
			margin: 2px;
      width: 10px;
      display: none;
      

			
		}
    }

}
</style>
