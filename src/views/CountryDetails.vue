<template>
   <section class="container">
      <a @click="$router.go(-1)" class="back-btn"
         ><ion-icon name="arrow-back-sharp"></ion-icon> back</a
      >
      <div class="flex">
         <div class="flag-holder">
            <img :src="flagSrc" alt="" />
         </div>
         <article>
            <h1>{{ countryName }}</h1>
            <div class="flex-list">
               <ul>
                  <li class="list">
                     Native name:
                     <span v-for="native in nativeName" :key="native"
                        >{{ native.common }}
                     </span>
                  </li>
                  <li>
                     Population:
                     <span>{{ population }}</span>
                  </li>
                  <li>
                     Region: <span>{{ region }}</span>
                  </li>
                  <li>
                     Sub Region: <span>{{ subRegion }}</span>
                  </li>
                  <li>
                     Capital: <span>{{ capital }}</span>
                  </li>
               </ul>
               <ul>
                  <li>
                     Top Level Domain: <span>{{ tld }}</span>
                  </li>
                  <li class="list">
                     Currencies:
                     <span v-for="curr in currencies" :key="curr">{{
                        curr.name
                     }}</span>
                  </li>
                  <li class="list">
                     Languages:
                     <span v-for="language in languages" :key="language"
                        >{{ language }}
                     </span>
                  </li>
               </ul>
            </div>
            <div class="flex-links">
               <p>Border Countries:</p>
               <div class="links" v-if="borders">
                  <button
                     @click="getDetailsByCode(border)"
                     v-for="border in borders"
                     :key="border"
                  >
                     {{ border }}
                  </button>
               </div>
               <div v-else>Nil.</div>
            </div>
         </article>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         sourceData: {},
         countryDetails: {},
         countryName: '',
         flagSrc: '',
         nativeName: '',
         population: null,
         region: '',
         subRegion: '',
         capital: '',
         tld: '',
         currencies: '',
         borders: [],
         languages: [],
      };
   },
   created() {
      this.getCountryDetails();
   },
   methods: {
      getCountryDetails() {
         fetch(`https://restcountries.com/v3.1/name/${this.$route.params.id}`)
            .then((response) => response.json())
            .then((data) => {
               this.sourceData = data[0];
               this.countryDetails = this.sourceData;
               this.countryName = this.countryDetails.name.common;
               this.flagSrc = this.countryDetails.flags.svg;
               this.nativeName = this.countryDetails.name.nativeName;
               this.population = this.countryDetails.population;
               this.region = this.countryDetails.region;
               this.subRegion = this.countryDetails.subregion;
               this.capital = this.countryDetails.capital[0];
               this.tld = this.countryDetails.tld[0];
               this.currencies = this.countryDetails.currencies;
               this.languages = this.countryDetails.languages;
               this.borders = this.countryDetails.borders;
            })
            .catch((err) => console.log(err));
      },
      getDetailsByCode(code) {
         fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((response) => response.json())
            .then((data) => {
               this.sourceData = data[0];
               this.countryDetails = this.sourceData;
               this.countryName = this.countryDetails.name.common;
               this.flagSrc = this.countryDetails.flags.svg;
               this.nativeName = this.countryDetails.name.nativeName;
               this.population = this.countryDetails.population;
               this.region = this.countryDetails.region;
               this.subRegion = this.countryDetails.subregion;
               this.capital = this.countryDetails.capital[0];
               this.tld = this.countryDetails.tld[0];
               this.currencies = this.countryDetails.currencies;
               this.languages = this.countryDetails.languages;
               this.borders = this.countryDetails.borders;
            })
            .catch((err) => console.log(err));
      },
   },
};
</script>

<style scoped>
.container {
   padding-inline: 6vw;
   padding-block: max(5vw, 2.5rem);
   color: var(--color-text);
}

.container .back-btn {
   text-transform: capitalize;
   background-color: var(--color-elements);
   padding: 0.4em 1.8em;
   border-radius: 0.2em;
   display: inline-flex;
   align-items: center;
   gap: 0.5em;
   margin-bottom: 3.5rem;
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.container ion-icon {
   transition: 300ms;
}

.container .back-btn:hover ion-icon {
   transform: translateX(-3px);
}

.flex {
   color: var(--color-text);
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 8rem;
}

@media (max-width: 760px) {
   .flex {
      gap: 2.5rem;
   }
}

.flex .flag-holder {
   width: min(430px, 90vw);
   flex-grow: 1;
}

.flex .flag-holder img {
   width: 100%;
}

.flex article {
   width: 40%;
   flex-grow: 1;
}

.flex article > h1 {
   font-size: clamp(1.2rem, 0.6vw + 0.8rem, 1.3rem);
   margin-bottom: 1.5rem;
}

.flex-list {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 2rem;
}
.flex-list li {
   margin-bottom: 0.5rem;
   font-size: clamp(0.8rem, 0.5vw + 0.5rem, 1rem);
   font-weight: 600;
}

.flex-list li span {
   font-weight: 300;
}

.flex-links {
   display: flex;
   align-items: center;
   gap: 1rem;
   flex-wrap: wrap;
   margin-top: 3rem;
}

.flex-links p {
   font-weight: 600;
}

.flex-links .links {
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
}

.flex-links button {
   border: none;
   cursor: pointer;
   background-color: var(--color-elements);
   padding: 0.2em 0.6em;
   min-width: 5.5rem;
   font-weight: 300;
   text-align: center;
   border-radius: 0.2em;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   transition: 30ms;
   transform-origin: left;
}

.list span::after {
   content: ', ';
}

.list span:last-child::after {
   content: '.';
}
</style>
