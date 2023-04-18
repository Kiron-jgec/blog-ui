<template>
  <v-app-bar flat location="top" :elevation="2">
    <v-app-bar-title>
      <v-icon icon="mdi-menu" />

      <span class="ml-2">Vuetify2</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/"> Home </v-btn>
    <v-btn to="/about"> About </v-btn>
    <v-btn to="/contact"> Contact </v-btn>
  </v-app-bar>
</template>

<script setup>
//
</script>
