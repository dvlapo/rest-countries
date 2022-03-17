<template>
   <main>
      <section class="flex">
         <Search @search="search" />
         <Filter @filter-by-region="filterByRegion" />
      </section>

      <div class="cards-grid" v-if="!loading">
         <CountryCard
            v-for="country in allCountries"
            :key="country.alpha3code"
            :flag="country.flags.svg"
            :countryName="country.name"
            :population="country.population"
            :region="country.region"
            :capital="country.capital"
         />
      </div>
      <div class="loading" v-else>
         Doing a quick sprint around world... &#9992;
      </div>
   </main>
</template>

<script>
import Search from '@/components/Search.vue';
import Filter from '@/components/Filter.vue';
import CountryCard from '@/components/CountryCard.vue';

export default {
   data() {
      return {
         loading: true,
         allCountries: [],
         countriesToFilter: [],
      };
   },
   created() {
      this.getAllCountries();
   },
   components: {
      Search,
      Filter,
      CountryCard,
   },
   methods: {
      getAllCountries() {
         fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
               this.loading = false;
               this.allCountries = data;
               this.countriesToFilter = data;
            })
            .catch((err) => console.log(err));
      },
      filterByRegion(region) {
         this.allCountries = this.countriesToFilter;
         this.allCountries = this.allCountries.filter((country) => {
            return country.region === region;
         });
      },
      search(query) {
         this.allCountries = this.countriesToFilter;
         this.allCountries = this.allCountries.filter((country) => {
            let formatedQuery = query.charAt(0).toUpperCase() + query.slice(1);
            return country.name.includes(formatedQuery);
         });
      },
   },
};
</script>

<style scoped>
main {
   padding-inline: 6vw;
   padding-block: max(3vw, 1.4rem);
   margin-inline: auto;
   background-color: var(--color-bg);
}

.flex {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 2.5rem;
   margin-bottom: max(3vw, 1.4rem);
}

.loading {
   color: white;
   font-size: clamp(1.1rem, 4.8vw - 1rem, 2rem);
   text-align: center;
   margin-top: 4rem;
}
.cards-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
   gap: 4rem;
}
</style>
