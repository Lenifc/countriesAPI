<template>
  <div class="home container">
    <div class="search-bar row">
      <div class="search-icon"><img src="@/assets/search.svg" alt="search" width="30px"></div>
      <!-- @ === v-on: -->
      <!-- : === v-bind: -->
      <input @input="changeCountry()" v-model="inputCountry" type="text" placeholder="Search for a country...">
    <select name="region" class="regionFilter" @change="changeRegion()" v-model="selectedRegion">
      <option value="">Worldwide</option>
      <option v-for="(continent, index) in region" :key="index" :value="continent">{{ continent }}</option>
    </select>
    </div>
    <div class="showCountries row" v-if="isLoaded">
      <SearchError v-if="error" :isFromHome='true'/>
        <div class="card" v-for="(country, index) in showCountries" :key="index">
          <router-link v-bind:to="country.alpha3Code">
          <div class="card-img"><img :src="country.flag" :alt="country.name" width="300px"></div>
          <div class="card-text">
            <h1 class="country-name">{{ country.name }}</h1>
            <div class="population"><span>Population:</span> {{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</div>
            <div class="region"><span>Region:</span> {{ country.subregion }}</div>
            <div class="capital"><span>Capital: {{ country.capital }}</span></div>
          </div>
          </router-link>
        </div>
    </div>
    <div v-else><Loader /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchError from '@/components/SearchError.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Home',
  
  data () {
    return{
      region: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
      inputCountry: '',
      searchedCountry: '',
      selectedRegion: '',
      showCountries: '',
      data: [],
      RegionCountries: [],
      error: '',
      isLoaded: false
    }
  },
  components:{
    SearchError,
    Loader
  },
  created(){
    fetch('https://restcountries.eu/rest/v2/all/').then(response => response.json()).then(recivedData => {
      if(recivedData.status == 404) console.log('Cos sie popsulo')
       else {
         this.data = recivedData
         this.RegionCountries = recivedData
         this.showCountries = recivedData
         this.isLoaded = true
        //  console.log(recivedData)
       }
      if(localStorage.getItem('savedRegion')) {
        this.selectedRegion = localStorage.getItem('savedRegion')
        this.changeRegion()
      }})
  },
  methods: {
    changeRegion() {
      if(!this.selectedRegion) this.RegionCountries = this.data
      else this.RegionCountries = this.data.filter(item=> item.region == this.selectedRegion)
      this.showCountries = this.RegionCountries
      localStorage.setItem('savedRegion', this.selectedRegion)
      this.changeCountry()
    },

    changeCountry () {
      const useThisData = this.RegionCountries ? this.RegionCountries : this.data

        this.searchedCountry = useThisData.filter((filterCountry) => 
          filterCountry.name.toLowerCase().includes(this.inputCountry.toLowerCase().trim())
          || filterCountry.alpha3Code.toLowerCase().includes(this.inputCountry.toLowerCase())
          || filterCountry.nativeName.toLowerCase().includes(this.inputCountry.toLowerCase().trim()))
          // Mozliwosc wyszukania krajow po pelnych nazwach, skrotach jak i ich ojczystych naazwach
  

      this.showCountries = this.searchedCountry
      this.error = this.showCountries.length == 0 ? true : false
    }
  }
}
</script>

<style>
.home{
    padding: 48px 0;
}

.row{
    display: flex;
    justify-content: space-between;
}

.showCountries.row{
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.search-bar{
    display: flex;
    position: relative;
    align-items: center;
}

.search-icon{
    position: absolute;
    width:30px;
    left: 8px;
    display: flex;
}

input{
    padding: 16px 48px;
    border-radius: 8px;
    border: none;
    background-color: var(--DarkBlueElement);
    color: white;
    width: min(300px, 100%);
}

input::placeholder{
    color: var(--VeryLightGrayBG);
}


.regionFilter,
.regionFilter:only-child{
    background-color: var(--DarkBlueElement);
    color: var(--VeryLightGrayBG);
    padding: 18px;
    border-radius: 8px;
    border: none;
}
.showCountries{
    margin-top: 32px
}

.card{
    width: min(300px, 90%);
    background-color: var(--DarkBlueElement);
    margin-right: 10px;
    margin-bottom: 48px;
    padding-bottom: 24px;
}

.card:hover{
    cursor: pointer;
}

.card-img {
    height: 200px;
    overflow: hidden;
}

.card-text{
    padding: 0 20px;
}

.country-name{
  margin-top:12px
}

.card-text span{
    font-weight: 800;
}

.region{
    padding: 8px 0;
}

@media(max-width:678px){
    .showCountries.row{
        justify-content: center;
    }
}
</style>