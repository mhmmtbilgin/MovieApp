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
		<div class="header__menu-icon">
			<a href="/search">Search</a>
			<a href="/signin">Signin</a>
			<a href="/signup">Signup</a>
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
				height: 70px;
				justify-content: space-between;
			


		}

		&__logo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include mq("desktop", max) {
			min-width: calc(100%/6);
	

			
			
		}
		}
		&__search{
			display: flex;
			flex-direction: row;
			justify-content: center;
			@include mq("desktop", max) {
				min-width: calc((100%-5%)/2);
				margin-left: 10px;
		

			}
			@include mq("mobile",max) {
				display: none;
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
				display: none;
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
			min-width: calc((100%-5%)/4);
			
		}
		@include mq("tablet",max) {
			display: none;
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
				min-width: calc((100%-5%)/4);
				justify-content: flex-end;
			}
			@include mq("tablet",max) {
				display: none;
			}
		}
		
		&__buttons{
			display: flex;
			flex-direction: row;
			align-items: center;
			
			@include mq("tablet",max) {
				display: none;
			}
		}
		&__sign-in , &__sign-up{
			display: flex;
			flex-direction: row;
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
				min-width: calc((100%-5%)/4);
				min-height: 20px;
				justify-content: space-between;
				margin-right: 8px;
				@include font-size(16);
				
				
			}
		
		}
		&__menu-icon{
			display: none;
			
			@include mq("tablet",max) {
				display: flex;
			}
			@include mq("mobile",max) {	
				
				margin-right: 5px;
				justify-content: center;
				text-decoration: none;
				margin-right: 5px;
				color:$black;


		}

		}
		&__menu-icon a{
			display: none;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			margin: 3px;
			color:$black;
			padding: 5px;
			@include font-size(16);
			border: 0.5px solid $black;
			
			@include mq("tablet",max) {
				display: flex;
			}
			@include mq("mobile",max) {	
				display: flex;
			


		}

		}
		
	}
}

</style>
