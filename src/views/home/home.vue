<template>
  <div class="home">
    <home_nav_bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home_search></home_search>
  </div>
</template>

<script setup>
import home_nav_bar from './components/home_nav_bar.vue';
import home_search from './components/home_search.vue'

</script>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
    
  }
}
</style>
