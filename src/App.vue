<template>
  <div id="app">
      <router-link :to="{ name: 'Home' }"><div class="container"><h1 class="title">What country are u lookin for?</h1></div></router-link>
    <router-view/>
  </div>
</template>

<style>
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
}
:root{
    --DarkBlueElement: hsl(209, 23%, 22%);
    --VeryDarkBlueBG: hsl(207, 26%, 17%);
    --VeryDarkBlueText: hsl(200, 15%, 8%);
    --darkGray: hsl(0, 0%, 52%);
    --VeryLightGrayBG: hsl(0, 0%, 98%);
}
body{
    background-color: var(--VeryDarkBlueBG);
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    color: var(--VeryLightGrayBG);
}

.container{
    width: min(96%, 1300px);
    margin: 0 auto;
    position: relative;
    /* border: 1px solid red; */
}

a{
  color: white;
  text-decoration: none;
}

.title{
  margin-top: 40px;
}

button{
  cursor: pointer;
}
</style>
