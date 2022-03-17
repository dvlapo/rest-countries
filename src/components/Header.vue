<template>
   <header>
      <h1>where in the world?</h1>
      <button @click="$emit('toggle-theme')">
         <span><ion-icon name="moon-outline"></ion-icon></span>
         dark mode
      </button>
   </header>
</template>

<script>
export default {
   methods: {},
};
</script>

<style scoped>
header {
   padding-inline: 5vw;
   padding-block: 1em;
   margin-inline: auto;
   background-color: var(--color-elements);
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: var(--color-text);
   box-shadow: rgba(0, 0, 0, 0.16) 0px -4px 10px 1px;
   position: relative;
}

header h1 {
   font-weight: 800;
   font-size: clamp(1rem, 4.8vw - 1.1rem, 1.9rem);
}

header h1::first-letter {
   text-transform: uppercase;
}

header button {
   background-color: unset;
   color: inherit;
   border: none;
   font-size: clamp(0.9rem, 0.7vw + 0.6rem, 1.03rem);
   display: flex;
   align-items: center;
   gap: 0.5rem;
   font-weight: 600;
   cursor: pointer;
   text-transform: capitalize;
}

header button ion-icon {
   display: flex;
   align-items: center;
}
</style>
