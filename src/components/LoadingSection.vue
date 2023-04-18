<template>
  <template>
    <div class="text-center">
      <v-dialog v-model="dialog" :scrim="true" persistent width="auto">
        <v-progress-circular indeterminate color="primary" />
      </v-dialog>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
const dialog = ref(true);
</script>

<style></style>
