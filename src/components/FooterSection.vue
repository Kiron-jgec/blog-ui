<template>
  <v-footer class="mt-15">
    <v-row>
      <v-col cols="12" md="6" class="pa-4">
        <div class="d-flex align-center justify-center">
          <p class="mt-2">
            <strong>
              Grow with us, growth is a process of continuous
              improvement.</strong
            >
          </p>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="pa-4 text-right">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class=""
          :icon="icon.icon"
          variant="plain"
          size="small"
          :href="icon.link"
          target="_blank"
        ></v-btn>
        &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/injamamul00",
      },

      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/injamamul-hoque/",
      },
      {
        icon: "mdi-github",
        link: "https://github.com/Kiron-jgec",
      },
    ],
  }),
};
</script>
