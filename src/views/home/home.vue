<template>
  <div class="home">
    <home_nav_bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text" >我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import home_nav_bar from './components/home_nav_bar.vue';
import { useRouter } from 'vue-router';
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res=>{
    console.log("获取位置成功:",res)
  }, res => {
    console.log("获取位置失败",res)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge:0
  })
}
const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
</script>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
    
  }
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city{
      flex: 1;
    }
    .position {
      width: 74px;
      .text {
        font-size: 12px;
      }
      img{
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }

    }
  }
}
</style>
