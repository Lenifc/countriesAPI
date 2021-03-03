<template>
<div class="container">
      <SearchError v-if="error"/>
   <div class="fullCard" v-if="isLoaded">
         <BackButton/>
      <div class="detailedCard row">
         <div class="detailed-card-img"><img :src="data.flag"></div>
         <div class="detailed-card-text">
            <div class="detailed-country-name">{{ data.name }}</div>
            <div class="details-row">
               <div class="details-row1">
                  <div class="country-native-name"><span>Native Name: </span>{{ data.nativeName }}</div>
                  <div class="population"><span>Population:</span> {{ data.population ? countryPopulation : "Unknown" }}</div> <!-- skrocona wersja -->
                  <!-- <div class="population" v-if="data.population"><span>Population:</span> {{ countryPopulation }}</div> -->
                  <!-- <div class="population" v-else><span>Population:</span> Unknown</div> -->
                  <!-- United States Minor Outlying Islands - unknown size -->
                  <div class="region"><span>Region:</span> {{ data.subregion }}</div>
                  <div class="capital"><span>Capital: {{ data.capital }}</span></div>
               </div>
               <div class="details-row2">
                  <div class="size"><span>Size: </span>{{ data.area ? countrySize : "Unknown" }} km<sup>2</sup></div>
                  <!-- <div class="size" v-if="data.area"><span>Size: </span>{{ countrySize }} km<sup>2</sup></div> -->
                  <!-- <div class="size" v-else><span>Size: </span>Unknown</div> -->
                  <div class="currencies"><span>Currencies: </span>{{ Currencies }}</div>
                  <div class="languages"><span>Languages: </span>{{ Languages}}</div>
               </div>
            </div>
            <div class="borders" v-if="data.borders.length"><span>Border Countries: </span>
               <router-link :to="border" v-for="(border, index) in Borders" :key="index">
                  <button class="border-btn"  ><!-- mimo zmiany linku funkcja updated() cos nie dziala, wiec wymuszam odswiezenie poprzez @click -->{{ border }}</button>
               </router-link>
               
            </div>
         </div>
      </div>
   </div>
   <div v-else><img class="loader" src="@/assets/spinner.gif"></div>


</div>
</template>

<script>
import SearchError from '@/components/SearchError.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  components: { SearchError, BackButton },

   data() {
      return {
         name: this.$route.params.country,
         data: [],
         isLoaded: false,
         error: false
      }
   },
   created() {
      this.fetchCountry()
      // console.log(this.$route.params.country)
   },
   beforeUpdate(){
      if (this.name !== this.$route.params.country) {
         this.name = this.$route.params.country
      }
   },
   watch: {
      '$route.params.country': 'fetchCountry'
   },
   computed:{
      countryPopulation: function() { return this.data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")},
      countrySize: function() { return this.data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")},
      Currencies: function() { return this.data.currencies.map(curr => curr.name).join(', ')},
      Languages:   function() { return this.data.languages.map(lang => lang.name).join(', ')},
      Borders:   function() { return this.data.borders.map(border => border)},
   },
   methods: {
      fetchCountry() {
         fetch(`https://restcountries.eu/rest/v2/alpha/${this.name}`)
            .then(response => response.json())
            .then(data => {
               if (data.status == 404 || data.status == 400) {
                  this.error = true
                  return
               } else this.data = data
               this.isLoaded = true
            })
      },

      goBack(){
         this.$router.go(-1)
      }
   }
}
</script>


<style >
.region{
    padding: 8px 0;
}

.country-name{
    padding: 16px 0;
    font-weight: 800;
    font-size: 1.2rem;
}

.fullCard{
    background-color: var(--VeryDarkBlueBG) ;
    padding: 64px 0;
}

.detailed-card-img img{
    width: 550px;
    height: 360px;
}

.border-btn{
    background-color: var(--DarkBlueElement);
    border:none;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px var(--VeryDarkBlueText);
    color: var(--VeryLightGrayBG);
    padding: 8px 16px;
    margin: 6px;
}

.detailed-card-text{
    font-size: 1rem;
    padding-left: 64px;
}

.detailed-card-text span{
    font-weight: 600;
}

.detailed-card-text div{
   line-height: 2;
}

.detailed-country-name{
    font-weight: 800;
    font-size: 1.85rem;
    padding: 24px 0;
}

.borders{
    padding-top: 64px;
}

.error{
   padding: 32px;
}

.details-row{
   display: flex;
   flex-wrap: wrap;
}

.details-row1{
   margin-right: 48px;
}

.btn-container{
   max-width: 100px;
}

.loader{
   margin: 32px auto;
   display: flex;
   justify-content: center;
}

@media(max-width: 1000px){
   .detailed-card-img img{
    width: 400px;
    height: 270px;
    transform: translateY(20%);
}
}
@media(max-width:777px){
   .detailedCard.row{
   flex-direction: column;
   align-items: center;
}
.detailed-card-img img{
   transform: translateY(0%);
   width: 100%;
   height: auto;
}
.detailed-card-text{
   padding-left: 12px;
}
.detailed-country-name{
   text-align: center;
}
}

</style>
