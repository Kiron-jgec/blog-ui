<template>
  <v-app-bar location="top" elevation="1">
    <v-app-bar-title>
      <span class="ml-2">
        <v-icon color="primary">mdi-vuetify</v-icon>
        <span class="font-weight-bold text-primary">Khosu</span>
      </span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" color="primary"> Home</v-btn>
    <v-btn to="/about" color="primary">About Me</v-btn>

    <v-btn
      icon="mdi-white-balance-sunny"
      v-if="theme.global.current.value.dark"
      @click="toggleTheme()"
    ></v-btn>
    <v-btn icon="mdi-weather-night" v-else @click="toggleTheme()"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { onMounted } from "vue";
import { useTheme } from "vuetify";
// dark mode toggle
const theme = useTheme();
// dark mode toggle

const toggleTheme = () => {
  // get the current theme

  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";

  if (theme.global.current.value.dark) {
    localStorage.setItem("dark-theme", true);
  } else {
    localStorage.setItem("dark-theme", false);
  }

  // set the theme
};
const getTheme = () => {
  const darkTheme = localStorage.getItem("dark-theme");
  if (darkTheme === "true") {
    theme.global.name.value = "dark";
  } else {
    theme.global.name.value = "light";
  }
};

onMounted(() => {
  getTheme();
});
</script>
