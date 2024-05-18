<template>
  <HeaderComponent />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>
