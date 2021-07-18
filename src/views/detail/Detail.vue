<template>
 <div class="detail">
   <div class="detail__image">
     <img :src="movie.posterpath" alt="Detail İmage" class="detail__img">
   </div>
   <div class="detail__content">
     <div class="detail__title">
      {{movie.title}}{{movie.name}}
     </div>
     <div class="detail__text">
       {{movie.overview}}
     </div>
     <div class="detail__raiting-box">
       <div class="detail__raiting">
         <div class="detail__raiting-text">
           Raiting : <img src="../../assets/svg/star.svg" alt="Raiting Star" > {{movie.rating}}

         </div>
         <div class="detail__release-date">
           Gösterim Yılı : {{movie.releaseyear}}

         </div>
       </div>
     </div>
     <div class="detail__bottom" >
        Oyuncular : <div class="detail__casts" v-for="cast in movie.casts.slice(0, 3)" :key="cast.id">
            {{cast.name+', '}}
        </div>
     </div>

   </div>
 </div>
</template>

<script>

import {ref, reactive,watchEffect } from 'vue';
import { useRoute } from "vue-router";
import env from '@/env.js';
export default {
  setup() {
    const route = useRoute();
    let movie = reactive({
      id: "",
      title: "",
      backgroundpath: "",
      posterpath: "",
      directors: "",
      overview: "",
      tagline: "",
      releaseyear: "",
      releasedate: "",
      casts: "",
   
    });
      
         const getMovie = async () =>
          await fetch(
            `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US&append_to_response=videos,credits,release_dates,similar,images`
          )
        .then((response) => response.json())
        .then((data) => {
          movie.id = data.id;
          movie.title = data.title;
          movie.poster_path = data.poster_path;
          movie.posterpath = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
          movie.overview = data.overview;
          movie.rating = data.vote_average;
          movie.releaseyear = `${data.release_date.slice(0, 4)}`;
          movie.releasedate = data.release_date.split("-").reverse().join("/");
           movie.casts = data.credits.cast.filter(
            (item) => item.profile_path != null
          );
          
        });
        watchEffect(() => {
          if (route.params.id) {
            getMovie();
          }
        });
	
    return {
      movie,
    
     
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
    @include mq("tablet",max){
      
      
    }
  }
  &__img{
   min-width: 300px;

   @include mq("tablet",max){
      min-width: 50%;
      
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
    @include mq("tablet",max){
      min-width: calc(100%/2);
      
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
    
    padding: 10px;
    color:$white;
    display: flex;
    flex-direction: row;
    @include mq("mobile",max){
      flex-direction: column;
      align-items: center;
    }
     @include mq("tablet",max){
      flex-direction: column;
      
    }
  }
 
 
}
</style>