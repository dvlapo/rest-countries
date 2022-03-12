<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Main from './views/Main.vue';

export default {
   data() {
      return {
         userTheme: 'dark-theme',
      };
   },
   components: {
      Header,
      Main,
   },
   mounted() {
      const initUserTheme = this.getMediaPreference();
      this.setTheme(initUserTheme);
   },
   methods: {
      toggleTheme() {
         const activeTheme = localStorage.getItem('user-theme');
         if (activeTheme === 'light-theme') {
            localStorage.setItem('user-theme', 'dark-theme');
            this.userTheme = 'dark-theme';
            document.documentElement.className = 'dark-theme';
         } else {
            localStorage.setItem('user-theme', 'light-theme');
            this.userTheme = 'light-theme';
            document.documentElement.className = 'light-theme';
         }
      },

      setTheme(theme) {
         localStorage.setItem('user-theme', theme);
         this.userTheme = theme;
         document.documentElement.className = theme;
      },

      getMediaPreference() {
         const hasDarkPreference = window.matchMedia(
            '(prefers-color-scheme: dark)'
         ).matches;
         if (hasDarkPreference) {
            return 'dark-theme';
         } else {
            return 'light-theme';
         }
      },
   },
};
</script>

<template>
   <div :class="{ 'dark-theme': userTheme === 'dark-theme' }">
      <Header @toggle-theme="toggleTheme" />
      <Main />
   </div>
</template>

<style>
@import '@/assets/base.css';
</style>
