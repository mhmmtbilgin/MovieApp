<template>
<section class="trends-tv">
	<div class="trends-tv__title">Movies</div>
	<div class="trends-tv__cards-episode">
		<div class="trends-tv__card"  v-for="movie in foundmovies" :key="movie.imdbID">
			<router-link class="trends-tv__router" :to="'/detail/'+movie.id">
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
			</router-link>

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



