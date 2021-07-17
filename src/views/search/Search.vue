<template>
<form @submit.prevent="searchMovie()" class="header__search">
		
				<input type="text" v-model="search" placeholder="Search..."  class="header__search-input">				
			
				<input type="submit" value="Search" >

		</form>
<section class="trends-tv">
	<div class="trends-tv__title">Movies & TV</div>
	<div class="trends-tv__cards-episode">
		<div class="trends-tv__card">
			<div class="trends-tv__top">
				<img src="../../assets/img/bliss.png" alt="Film Image" class="trends-tv__image">
			</div>
			<div class="trends-tv__bottom">
				<div class="trends-tv__name">
                 BLİSS
				</div>
				<div class="trends-tv__rating">
					<img src="../../assets/svg/star.svg" alt="Raiting" > 7.0
				</div>
			</div>

		</div>
       
	</div>


</section>

</template>
<script>
import {ref } from "vue";
import env from "@/env.js";
export default {

  setup() {
	const movies= ref({});
	const search = ref("");

	const searchMovie = () => {
		if (search.value != "") {
			fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
            .then(response=>response.json())
            .then(data=>{
			movies.value=data.search;
			search.value="";
			console.log(data)
			});
		}
	}

 
	

    return {
		movies,
		search,
		searchMovie
	

    };
    
  },
  
}
</script>

<style lang="scss">


.trends-tv{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
        @include font-size(18);
        color:rgb(255, 255, 255);
    }
    &__cards-episode{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
		
    
        
        @include mq("mobile", max) {
        margin: 2px;
        width: 10px;
       
        

			
		}
    }
	&__card{
	
		background-color: #FFCB14;
		margin: 20px;
		font-weight: 600;
		@include font-size(14);
	}
    &__bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
    }
}

</style>