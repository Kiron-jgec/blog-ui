<template>
  <v-container class="postDetils">
    <main class="mt-3">
      <LoadingSection v-if="loading" />
      <v-row>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9">
          <v-card class="pb-10">
            <v-img
              lazy-src="../assets/place-holder.jpg"
              :src="post.image"
              :alt="post.title"
              max-height="450px"
              max-width="100%"
              contain
              class="text-white"
              cover
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
            <v-row>
              <v-col cols="12" md="6" xs="12" class="px-8 py-6">
                <div class="text-grey">
                  <v-icon size="20">mdi-clock-time-seven-outline</v-icon>
                  {{ post.date }},
                  <v-icon size="20"> mdi-folder-outline </v-icon>
                  {{ post.catagoery[0] }},
                  <v-icon size="20">mdi-comment-text-outline </v-icon>
                  {{ post.comments.length }}
                </div>
              </v-col>
              <v-col cols="12" md="6" xs="12" class="px-8 py-6 text-right">
                <v-spacer></v-spacer>
                <v-btn
                  density="comfortable"
                  icon="mdi-facebook"
                  size="small"
                  variant="contained"
                ></v-btn>
                <v-btn
                  density="comfortable"
                  icon="mdi-twitter"
                  size="small"
                  variant="contained"
                ></v-btn>
                <v-btn
                  density="comfortable"
                  icon="mdi-linkedin"
                  size="small"
                  variant="contained"
                ></v-btn>
                <v-btn
                  density="comfortable"
                  icon="mdi-instagram"
                  size="small"
                  variant="contained"
                ></v-btn>
              </v-col>
            </v-row>
            <div class="text-h4 px-4 text-primary mb-2">
              {{ post.title }}
            </div>
            <div class="text-body-1 px-5 text-grey" tag="p">
              {{ post.subtitle }}
            </div>

            <v-card-text v-html="post.content" class="text-body-1 px-5">
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="2">
          <div>
            <v-icon size="20" color="grey">mdi-folder</v-icon> Category :
            <v-btn
              color="primary"
              v-for="category in post.catagoery"
              :key="category"
              variant="text"
              class="text-capitalize text-body-1 px-0 py-0 mx-2 px-3"
              @click="
                router.push({ name: 'Category', params: { id: post.category } })
              "
            >
              {{ category }}
            </v-btn>
          </div>
          <div class="mt-3">
            <v-icon size="20" color="grey">mdi-tag</v-icon> Tags :

            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              class="mx-2 my-1 px-4 py-3"
              color="primary"
              size="small"
            >
              {{ tag }}
            </v-chip>
          </div>

          <div class="mt-3">
            <v-icon size="20" color="grey">mdi-link</v-icon> Important Links :
            <div v-for="(link, index) in links" :key="index" class="py-1">
              <a :href="link.url" class="text-primary text-decoration-none">
                {{ link.text }}
              </a>
            </div>
          </div>
          <div class="mt-3">
            <v-icon size="20" color="grey">mdi-calendar</v-icon> Recent Posts :
            <v-card
              v-for="(post, idx) in recentPosts"
              :key="idx"
              class="mt-3 pb-4"
              @click="showPost(post.id)"
            >
              <v-img
                lazy-src="../assets/place-holder.jpg"
                :src="post.image"
                :alt="post.title"
                max-height="150px"
                max-width="100%"
                contain
                class="text-white"
                cover
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
              <div class="text-body-1 mt-3 px-4 text-primary">
                <strong> {{ post.title }}</strong>
              </div>

              <div class="px-4">
                {{ post.subtitle }}
              </div>
            </v-card>
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9">
          <v-card class="px-2">
            <v-card-title class="text-body-1"> Author </v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="2"
                  xl="2"
                  class="text-center"
                >
                  <v-avatar color="surface-variant" class="mx-auto" size="100">
                    <v-img
                      src="../assets/kiron.png"
                      alt="author"
                      class="text-white"
                      lazy-src="../assets/place-holder.jpg"
                    >
                      <template v-slot:placeholder>
                        <div
                          class="d-flex align-center justify-center fill-height"
                        >
                          <v-progress-circular
                            color="grey-lighten-4"
                            indeterminate
                          ></v-progress-circular>
                        </div>
                      </template> </v-img
                  ></v-avatar>
                </v-col>
                <v-col cols="12" sm="8" md="8" lg="8" xl="8">
                  <div class="text-h6 text-primary">Injamamul Hoque</div>
                  <div class="text-body-1">
                    Hi, I’m @Kiron , I am full stack web developer.I’m
                    interested in web design and development seedling I’m
                    currently working in VueJs,ReactJs for frontend and
                    Nodejs,Mongodb,Mysql for backend.
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9">
          <div class="text-h6">You may also like</div>
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(post, idx) in relatedPosts"
              :key="idx"
            >
              <v-card class="mt-3 pb-4" @click="showPost(post.id)">
                <v-img
                  lazy-src="../assets/place-holder.jpg"
                  :src="post.image"
                  :alt="post.title"
                  max-height="150px"
                  max-width="100%"
                  contain
                  class="text-white"
                  cover
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
                <div class="text-body-1 mt-3 px-4 text-primary">
                  <strong> {{ post.title }}</strong>
                </div>

                <div class="px-4">
                  {{ post.subtitle }}
                </div>
              </v-card></v-col
            ></v-row
          >
        </v-col>
        <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9">
          <v-card class="py-5 px-2" elevation="0">
            <v-card-title class="text-body-1">Add Your Comments </v-card-title>
            <v-card-text class="text-body-2">
              All comments are moderated. Your email address will not be
              published. Required fields are marked *
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" md="6" lg="6" xl="6">
                  <v-text-field
                    label="Name*"
                    color="primary"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" md="6" lg="6" xl="6">
                  <v-text-field
                    label="Email*"
                    color="primary"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" md="12" lg="12" xl="12">
                  <v-textarea
                    v-model="comment"
                    label="Comment*"
                    placeholder="Write your comment here"
                    outlined
                    rows="5"
                    color="primary"
                    variant="outlined"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-btn color="primary" class="mx-auto">Add Comment</v-btn>
            </v-card-text>
            <v-card-text>
              All Commends ({{ post.comments.length }})
            </v-card-text>
            <v-card-text v-for="comment in post.comments" :key="comment.id">
              <v-card outlined elevation="0">
                <v-card-title class="text-body-1">
                  {{ comment.author }}
                </v-card-title>
                <v-card-text> {{ comment.content }} </v-card-text>
                <v-card-actions>
                  <div>
                    <v-icon size="20" color="grey">mdi-calendar</v-icon>
                    {{ comment.date }} at {{ comment.time }}
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="grey"
                    icon="mdi-reply"
                    density="comfortable"
                  ></v-btn>
                  <v-btn
                    color="grey"
                    icon="mdi-heart"
                    density="comfortable"
                  ></v-btn>
                </v-card-actions>
              </v-card>
              <v-divider></v-divider>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </main>
  </v-container>
</template>

<script setup>
import allposts from "../../db.json";
import { useRouter } from "vue-router";
import LoadingSection from "../components/LoadingSection.vue";
import { ref } from "vue";

const router = useRouter();
const loading = ref(true);
let post = allposts.posts.find(
  (post) => post.id == router.currentRoute.value.params.id
);
const recentPosts = allposts.posts.slice(0, 2).reverse();
const relatedPosts = allposts.posts.slice(3, 6).reverse();

const links = [
  {
    text: "What is vue js ?",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
  {
    text: "How to create a vue app",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
  {
    text: "Why vue js is so popular",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
  {
    text: "Complete vue js tutorial",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
  {
    text: "Vue js vs react js",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
  {
    text: "Vue js vs angular js",
    url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
  },
];

loading.value = false;

const showPost = (id) => {
  window.open("/posts/" + id, "_blank");
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  font-size: 1.2rem !important;
}
.postDetils {
  min-height: 100vh !important;
  margin: 0 auto;
}
</style>
