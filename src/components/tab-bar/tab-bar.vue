<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
        <template v-for="(item,index) in imgData" :key="item">
            <van-tabbar-item  :to="item.path">
                <span>{{item.text}}</span>
                <template #icon>
                  <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
                  <img v-else-if="currentIndex === index" :src="getAssetUrl(item.imageActive)" alt="">
                </template>
              </van-tabbar-item>
        </template> 
      </van-tabbar>   
  </div>
</template>

<script setup>
import imgData from "@/assets/data/tabbar"
import { getAssetUrl } from "@/utils/load_asset"
import { ref } from 'vue'
const currentIndex = ref(0)

</script>
<style lang="less" scoped>
.tab-bar{
    :deep(.van-tabbar-item__icon) {
        font-siez:50px;
    }
    img {
        height: 28px;
    }
}
</style>
