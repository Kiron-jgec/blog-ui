<template>
  <v-container class="home">
    <header class="mt-5">
      <h1 class="text-primary text-h5">{{ msg }}</h1>
    </header>
    <main class="mt-5">
      <v-row>
        <v-col
          v-for="post in allposts.posts"
          :key="post.id"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <post-card :post="post" />
        </v-col>
      </v-row>
    </main>
  </v-container>
</template>

<script setup>
const msg = "All Posts";
import postCard from "../components/PostCard.vue";
import allposts from "../../db.json";
</script>

<style scoped>
.home {
  min-height: 100vh !important;
  margin: 0 auto;
}
</style>
