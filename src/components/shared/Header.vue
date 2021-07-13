<template>
  <header>
<div class="header">
		<div class="header__logo">
			<img src="../../assets/svg/logo.svg" alt="Logo" >
		</div>
		<div class="header__search">
			<div class="header__search-inputs">
				<input type="text" placeholder="Search..."  class="header__search-input">				
			</div>
			<div class="header__search-btn">
				<img src="../../assets/svg/search-btn.svg" alt="search button" >
			</div>
		</div>
		<div class="header__buttons">
			<button class="header__sign-in">Sign In</button>
			<button class="header__sign-up">Sign Up</button>
		</div>
		<div class="header__menu-icon">
			<img src="../../assets/svg/header-menu.svg" alt="Logo" >
		</div>
</div>
</header>
<div class="slider">
	<img src="../../assets/img/slider.png" alt="slider photo" class="slider__photo">
</div>

</template>

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
			min-width: calc((100%-5%)/1);
			height: 170px;
			margin: 10px 0 10px 0;
	
		}
		@include mq("mid-tablet",max) {
			min-width: calc((100%-5%)/4);
			
	
		}
		

		@include mq("tablet",max) {	
			min-width: calc((100%-5%)/10);
		

		}
		@include mq("mobile",max) {	
				height: 70px;
			


		}

		&__logo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include mq("desktop", max) {
			min-width: calc((100%-5%)/6);
	

			
			
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
			@include mq("desktop",max) {

			}
			
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
				height: 70px;
				margin-right: 5px;


		}

		}
		
	}
}
.slider{
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 30px;

	&__photo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		@include mq("desktop",max) {
			min-width: calc((100%-5%)/2);
			
	
		}
		@include mq("tablet",max) {	
			min-width: calc((100%-5%)/12);


		}
		@include mq("mid-tablet",max) {
			min-width: calc((100%-5%)/12);
			
	
		}
		
	}
}

// .header {
//   flex-grow: 1;

//   min-height: 80px;

//   display: flex;
//   flex-direction: row;
//   align-items: stretch;
//   justify-content: space-between;

//   &__menu {
//     flex-grow: 1;

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//   }

//   &__link {
//     margin: 0 20px;
//     padding: 10px 20px;

//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: center;

//     border-radius: 6px;
//     background-color: transparent;

//     color: $menu-link;
//     text-decoration: none;
//     text-transform: uppercase;

//     transition: background-color 0.4s ease-out;

//     &:hover {
//       color: $menu-link-hover;
//       text-decoration: underline;
//     }

//     &.router-link-active {
//       background-color: $menu-link-active-bgcolor;
//       color: $menu-link-active;
//     }
//   }
// }
</style>
