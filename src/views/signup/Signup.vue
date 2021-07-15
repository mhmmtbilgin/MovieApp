<template>
<div class="sign-up">
<div class="sing-up__phone">
<input type="text" class="sign-up__input" placeholder="Telefon numaranız">
</div>
<div class="sing-up__email">
<input type="text" class="sign-up__input" placeholder="E-posta adresiniz">
</div>
<div class="sing-up__pass">
<input type="password" class="sign-up__input" placeholder="Parolanız">
</div>
<div class="sing-up__button">
<input type="button" class="sign-up__input" value="Kaydol">
</div>

</div>    
</template>

<script>
export default {
    setup() {
        
        return{

        };
    },
}
</script>

<style lang="scss">
.sign-up{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    &__input{
        display: flex;
        justify-content: center;
        min-width: 300px;
        min-height: 50px;
        margin: 10px;
        outline: none;
        padding: 12px;
        @include font-size(16);
    }
   
}

</style>