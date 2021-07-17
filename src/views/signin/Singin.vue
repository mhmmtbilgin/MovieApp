<template>
<div class="sign-in">
<div class="sing-in__email">
<input type="text" class="sign-in__input" placeholder="E-posta adresiniz">
</div>
<div class="sing-in__pass">
<input type="password" class="sign-in__input" placeholder="Parolanız">
</div>
<div class="sing-in__button">
<input type="button" class="sign-in__input" value="Giriş Yap">
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
.sign-in{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    &__input{
        display: flex;
        justify-content: center;
        min-width: 250px;
        min-height: 40px;
        margin: 10px;
        outline: none;
        padding: 12px;
        @include font-size(16);
       
     
    }
       input[type=button]{
                background-color: $yellow;
                border: none;
                @include font-size(18);
                margin-bottom: 50px;
        
        }
     
   
}

</style>