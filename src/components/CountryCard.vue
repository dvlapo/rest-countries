<template>
   <section class="country-card">
      <div class="flag">
         <img :src="flag" :alt="`flag of ${countryName}`" />
      </div>

      <article>
         <h1>{{ countryName }}</h1>
         <ul>
            <li>
               Population: <span>{{ population }}</span>
            </li>
            <li>
               Region: <span>{{ region }}</span>
            </li>
            <li>
               Capital: <span>{{ capital }}</span>
            </li>
         </ul>
      </article>
   </section>
</template>

<script>
export default {
   data() {
      return {};
   },
   props: ['flag', 'countryName', 'population', 'region', 'capital'],
};
</script>

<style scoped>
.country-card {
   font-weight: 600;
   color: var(--color-text);
   background: var(--color-elements);
   border-radius: 0.4em;
   overflow: hidden;
   cursor: pointer;
   transition: 50ms;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.country-card:hover {
   transform: translateY(-2px);
}

.country-card:hover img {
   filter: grayscale(1);
}

.country-card .flag {
   max-width: 100%;
   height: 50%;
   overflow: hidden;
}

.country-card .flag img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.country-card article {
   padding: 1.5em;
   padding-top: 1.8em;
}

.country-card article h1 {
   margin-bottom: 0.6rem;
   font-size: clamp(0.9rem, 0.5vw + 0.6rem, 1.1rem);
}

.country-card ul {
   list-style-type: none;
   /* margin-bottom: 2rem; */
}

.country-card li {
   margin-bottom: 0.3rem;
   font-size: clamp(0.8rem, 0.5vw + 0.5rem, 1rem);
}

.country-card li span {
   font-weight: 300;
}
</style>
