<template>
   <div class="search-field">
      <ion-icon name="search-outline"></ion-icon>
      <input
         type="text"
         placeholder="Search for a country..."
         aria-label="Search for a country..."
         v-model="searchQuery"
         @input="$emit('search', searchQuery)"
      />
   </div>
</template>

<script>
export default {
   data() {
      return {
         searchQuery: '',
      };
   },
   methods: {},
};
</script>

<style scoped>
.search-field {
   display: inline-flex;
   gap: 1rem;
   background: var(--color-elements);
   padding: 1.2em 1.4em;
   border-radius: 0.4em;
   width: min(90vw, 25rem);
   font-weight: 600;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.search-field ion-icon {
   display: flex;
   align-items: center;
   color: var(--color-text);
   margin-top: 0.1rem;
}

.search-field input {
   border: none;
   outline: none;
   background: transparent;
   color: var(--color-input);
   font-weight: 600;
   width: 100%;
}
</style>
