<template>
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
	</div>


</section>

</template>
<script>
export default {
 
  setup() {
   



    return {

    };
    
  },
  
};
</script>

<style lang="scss">

.trends-tv{
    display: flex;
    flex-direction: column;

    margin: 10px;
    align-items: center;
    &__title{
        @include font-size(18);
        color:rgb(255, 255, 255);
    }
    &__cards-episode{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 20px;
        margin-bottom: 20px;
        
        @include mq("mobile", max) {
        margin: 2px;
        width: 10px;
        display: none;
        

			
		}
    }
    &__bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
    }
}

</style>