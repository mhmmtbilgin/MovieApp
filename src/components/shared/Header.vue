<template>
  <header>
<div class="header">
		<a href="./../" class="header__logo">
			<img src="../../assets/svg/logo.svg"  alt="Logo" >
		</a>
		
		<div class="header__search">
			<form @submit.prevent="searchMovie()" class="header__search" >
		
				<input type="text" v-model="search" placeholder="Search..."  class="header__search-input">				
			
			<div class="header__search-btn">
				<input type="submit" value=" " @click="'/search'">
			</div>
				
				

		</form>
		</div>
		<div class="header__buttons">
			<a href="/signin" class="header__sign-in">Sign In</a>
			<a href="/signup" class="header__sign-up">Sign Up</a>
		</div>
</div>
</header>





</template>


  
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import env from "@/env.js";
export default {
  setup() {
    const search = ref("");
    const router = useRouter();
    const searchMovie = () => {
      if (search.value) {
        router.replace({
          path: "/search",
          query: { q: search.value },
        });
      }
    };
    return {
      search,
      searchMovie,
    };
  },
};
</script>



<style lang="scss">
header{

	font-family: $font-family;
	
	
	.header{
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
		@include mq("mid-tablet",max) {
			min-width: calc(100%/4);
			
	
		}
		

		@include mq("tablet",max) {	
			min-width: calc(100%/10);
		

		}
		@include mq("mobile",max) {	
				height: 80px;
				
			


		}

		&__logo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include mq("desktop", max) {
			min-width: calc(100%/8);
	

			
			
		}
		}
		&__search{
			display: flex;
			flex-direction: row;
			justify-content: center;
			@include mq("desktop", max) {
				min-width: calc(100%/6);
				margin-left: 10px;
		

			}
			@include mq("mobile",max) {
				min-width: calc(100%/35);
				display: flex;
			}
			input[type=submit]{
			display: flex;
			flex-direction: row;
			align-items: center;
			padding-right: 10px;
			background-color: #e1bc3c;
			border-radius: 0 10px 10px 0;
			background-image: url("../../assets/svg/search-btn.svg");	
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			height: 30px;
    		width: 30px;
			border: none;
			@include mq("desktop", max) {
				min-width: calc(100%/4);
				justify-content: flex-end;
			}
			@include mq("tablet",max) {
				display: flex;
				min-width: calc(100%/10);
			}
			@include mq("mobile",max) {
				display: flex;
				height: 15px;
				width: 15px;
			}
			
		}

		}
		
		&__search-input{
			min-width: 400px;
			min-height: 45px;
			background-color: #9C97974d;
			border:none;
			padding: 15px;
			border-radius: 10px 0 0 10px;
			&:focus{
				outline: none;
		}
		@include mq("desktop", max) {
			min-width: 300px;
			min-height: 35;
			
		}
		@include mq("tablet",max) {
			min-width: 200px;
			min-height: 25px;
		}
		@include mq("mobile",max) {
			min-width: 100px;
			min-height: 15px;
			margin-left: 0px;
		}
		}
		&__search-btn{
			display: flex;
			flex-direction: row;
			align-items: center;
			padding-right: 10px;
			background-color: #9C97974d;
			border-radius: 0 10px 10px 0;
			@include mq("desktop", max) {
				min-width: calc(100%/4);
				justify-content: flex-end;
			}
			@include mq("tablet",max) {
				min-width: calc(100%/4);
			}
		}
		
		&__buttons{
			display: flex;
			flex-direction: row;
			align-items: center;
			
			@include mq("tablet",max) {
				flex-direction: column;
				margin-left: 15px;
				height: 48px;
    			min-width: 80px;
			}
			@include mq("mobile",max) {
				flex-direction: column;
				height: 48px;
    			min-width: 80px;
				
			}
		
		}
		&__sign-in , &__sign-up{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			min-width: 100px;
			min-height: 50px;
			margin-right: 30px;
			border: 1px solid black;
			text-decoration: none;
			color: black;
			background-color:#FFCB14;
			@include font-size(18);
			@include mq("desktop", max) {
				min-width: calc(100%/4);
				min-height: 20px;
				justify-content: space-between;
				align-items: center;
				margin-right: 8px;
				@include font-size(16);
				
				
			}
			@include mq("tablet", max) {
				min-width: 50px;
				@include font-size(10);
				margin: 3px;
				justify-content: space-between;
				align-items: center;
				@include font-size(14);
				
				
			}
			@include mq("mobile", max) {
				min-width: 50px;
				@include font-size(10);
				margin: 3px;
				
				
				
			}
		
		}
	
		
	}
}

</style>
