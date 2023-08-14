<template>
  <div class="container">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{
          route.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.container {
  background-color: #2eb72e;
  padding: 10px 0;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 10px;
      list-style-type: none;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
