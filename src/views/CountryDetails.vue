<template>
   <section class="container">
      <router-link to="/" class="back-btn"
         ><ion-icon name="arrow-back-sharp"></ion-icon> Back</router-link
      >
      <div class="flex">
         <div class="flag-holder">
            <img src="https://picsum.photos/seed/picsum/200/130" alt="" />
         </div>
         <article>
            <h1>Belgium</h1>
            <div class="flex-list">
               <ul>
                  <li>Native name: <span>Belgie</span></li>
                  <li>Population: <span>11,213,331</span></li>
                  <li>Region: <span>Europe</span></li>
                  <li>Sub Region: <span>Western Europe</span></li>
                  <li>Capital: <span>Brussels</span></li>
               </ul>
               <ul>
                  <li>Top Level Domain: <span>.be</span></li>
                  <li>Currencies: <span>Euro</span></li>
                  <li>Languages: <span>Dutch, French, German</span></li>
               </ul>
            </div>
            <div class="flex-links">
               <p>Border Countries:</p>
               <div class="links">
                  <router-link to="/"> France</router-link>
                  <router-link to="/"> Germany</router-link>
                  <router-link to="/"> Netherlands</router-link>
               </div>
            </div>
         </article>
      </div>
   </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {};
</script>

<style scoped>
.container {
   padding-inline: 5vw;
   padding-block: max(5vw, 2.5rem);
   color: var(--color-text);
}

.container .back-btn {
   background-color: var(--color-elements);
   padding: 0.4em 1.8em;
   border-radius: 0.2em;
   display: inline-flex;
   align-items: center;
   gap: 0.5em;
   margin-bottom: 3.5rem;
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
   gap: 3.5rem;
}

.flex .flag-holder {
   width: min(400px, 90vw);
   flex-grow: 1;
}

.flex .flag-holder img {
   width: 100%;
}

.flex article {
   width: 50%;
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

.flex-links a {
   background-color: var(--color-elements);
   padding: 0.1em 0.6em;
   min-width: 5.5rem;
   font-weight: 300;
   text-align: center;
   border-radius: 0.2em;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   transition: 30ms;
   transform-origin: left;
}

.flex-links a:hover {
   transform: scaleX(1.005);
}
</style>
