<template>
<div class="slider">
	<img src="../../assets/img/slider.png" alt="slider photo" class="slider__photo" width="1300">
</div>

<section class="trends-tv">
	<div class="trends-tv__title">Movies</div>
	<div class="trends-tv__cards-episode">
		<div class="trends-tv__card"  v-for="topMovie in topMovies" :movie="topMovie" :key="topMovie.id">
			<router-link class="trends-tv__router" :to="'/detail/'+topMovie.id">
			<div class="trends-tv__top">
				<img v-bind:src="`https://image.tmdb.org/t/p/w200/` + topMovie.poster_path" alt="Film Image" class="trends-tv__image">
			</div>
			<div class="trends-tv__bottom">
				<div class="trends-tv__name">
                   {{topMovie.title}}{{topMovie.name}}
				</div>
				<div class="trends-tv__rating">
					<img src="../../assets/svg/star.svg" alt="Raiting" > {{topMovie.vote_average}}
				</div>
			</div>
			</router-link>
		</div>
	</div>
</section>

</template>
<script>
import { onMounted, ref } from "vue";
import env from "@/env.js";
export default {
  setup() {
    const topMovies = ref([]);
    const getAlltopMovies = async () =>
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${env.apikey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          topMovies.value = data.results;
        });
    onMounted(() => {
      getAlltopMovies();
    });
    return {
      topMovies,
    };
  },
};
</script>

<style lang="scss">
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
			min-width: calc(100%/2);
			
	
		}
		@include mq("tablet",max) {	
			min-width: calc(100%/12);


		}
		@include mq("mobile",max) {
			min-width: calc(100%/15);
			
	
		}
		
	}
}



.trends-tv{
    display: flex;
    flex-direction: column;
    align-items: center;
	
	
    &__title{
        @include font-size(24);
        color:$white;
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
	&__router{
			color:$black;
			text-decoration: none;
		}
    &__bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
		 
    }
	&__name{
		max-width: 140px;
		
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
	}
}

</style>