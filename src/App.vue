<template>
  <v-app>
    <v-main>
      <AppBar />
      <router-view />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./components/AppBar.vue";
import FooterSection from "./components/FooterSection.vue";
</script>
