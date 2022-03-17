<template>
   <div class="filter-container">
      <button class="filter" aria-expanded="false" @click="toggleOpenFilter">
         <p>Filter by Region</p>
         <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <div v-if="openFilterOptions" class="options">
         <ul v-for="region in regions" :key="region" class="regions-list">
            <li role="button" @click="$emit('filter-by-region', region.name)">
               {{ region.name }}
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         openFilterOptions: false,
         regions: [
            { id: 1, name: 'Africa' },
            { id: 2, name: 'Americas' },
            { id: 3, name: 'Asia' },
            { id: 4, name: 'Europe' },
            { id: 5, name: 'Oceania' },
         ],
      };
   },
   methods: {
      toggleOpenFilter() {
         this.openFilterOptions = !this.openFilterOptions;
      },
   },
};
</script>

<style>
.filter-container {
   position: relative;
}

.filter {
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
   background: var(--color-elements);
   padding: 1em 1.4em;
   border: none;
   border-radius: 0.4em;
   width: min(50vw, 12rem);
   font-weight: 600;
   color: var(--color-text);
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.options {
   position: absolute;
   background: var(--color-elements);
   padding: 1em 1.4em;
   border-radius: 0.3em;
   width: min(50vw, 12rem);
   font-weight: 600;
   color: var(--color-text);
   margin-top: 0.2rem;
   display: flex;
   flex-direction: column;
   gap: 0.4rem;
   z-index: 2;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.regions-list {
   cursor: pointer;
   transition: 100ms;
}

.regions-list:hover {
   transform: translateX(2px);
}
</style>
