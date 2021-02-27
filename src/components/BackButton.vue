<template>
    <button class="back-btn" @click="goBack"><img src="@/assets/left-arrow.svg" width="30px">Back</button>
</template>

<script>
export default {
    name: 'BackButton',
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.back-btn{
    background-color: var(--DarkBlueElement);
    border:none;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 0 10px 2px var(--VeryDarkBlueText);
    color: var(--VeryLightGrayBG);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 30px 12px 50px;
    margin-bottom: 48px;
    background-position-x: 12px;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 20px;
}
.back-btn img{
   position: absolute;
   left: 10px;
   }
</style>