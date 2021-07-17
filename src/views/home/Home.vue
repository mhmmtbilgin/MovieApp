<template>
<div class="slider">
	<img src="../../assets/img/slider.png" alt="slider photo" class="slider__photo">
</div>

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
import {ref  } from "vue";
import env from '@/env.js';
export default {
	
 
  setup() {
	const movies= ref({});

	const ApiFetch = () => {
		if (search.value != "") {
			fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&type=[movie]`)
            .then(response=>response.json())
            .then(data=>{
			console.log(data)
			});
		}
	}

    return {
		movies,
		ApiFetch

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