<template>
  <div class="city ">
    <div class="top">
        <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/地区"
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value,key,index) in allCities" :key="key">
            <van-tab :title="value.title" :name="key"></van-tab>
        </template>
        
      </van-tabs>
    </div>
   <div class="content">
    <template v-for="(value,key,index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
    </template>
      
   </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import CityGroup from "./components/city-group-item.vue"

const searchValue = ref('')
const router = useRouter()
//搜索框
const cancelClick = () =>{
    router.back()
}

const tabActive = ref('')
//网络请求
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => 
    allCities.value[tabActive.value]
)


</script>
<style lang="less" scoped>
.city {

    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}
</style>
