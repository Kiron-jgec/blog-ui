<template>
  <v-card class="mx-auto" outlined @click="showPost">
    <v-img
      lazy-src="../assets/place-holder.jpg"
      :src="post.image"
      height="182px"
      cover
      class="text-white"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
    <div class="text-h6 mt-3 px-4 text-primary">
      {{ post.title }}
    </div>

    <p class="px-4 text-body-1 mt-2">
      {{ post.subtitle }}
    </p>

    <v-card-actions class="mt-2">
      <div class="text-body-1 pl-2">{{ post.date }}</div>
      <v-spacer></v-spacer>
      <v-btn icon color="grey">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
console.log(props.post);

const router = useRouter();

const showPost = () => {
  router.push({ name: "Post", params: { id: props.post.id } });
};
</script>
