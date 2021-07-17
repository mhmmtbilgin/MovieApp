<template>
<section class="trends-tv">
	<div class="trends-tv__title">Movies & TV</div>
	<div class="trends-tv__cards-episode">
		<div class="trends-tv__card"  v-for="movie in foundmovies" :key="movie.imdbID">
			
			<div class="trends-tv__top">
				<img :src="`https://image.tmdb.org/t/p/w200/` + movie.poster_path" alt="Film Image" class="trends-tv__image">
			</div>
			<div class="trends-tv__bottom">
				<div class="trends-tv__name">
                {{movie.title}}
				</div>
				<div class="trends-tv__rating">
					<img src="../../assets/svg/star.svg" alt="Raiting" > {{movie.vote_average}}
				</div>
			</div>
			

		</div> 
       
	</div>



</section>

</template>

<script>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";
export default {
  setup() {
    const route = useRoute();
    const foundmovies = ref([]);
    const getMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${route.query.q}&append_to_response=videos,credits,release_dates,similar,images`
      )
        .then((response) => response.json())
        .then((data) => {
          foundmovies.value = data.results.filter(
            (item) => item.poster_path != null
          );
          console.log(foundmovies);
        });
    watchEffect(() => {
      getMovies();
    });
    return {
      foundmovies,
    };
  },
};
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