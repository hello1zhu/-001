<template>
    <van-index-bar :sticky="false" :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="list">
            <template v-for="(city,index) in groupData.hotCities" :key="index">
                <div class="city">
                    {{city.cityName}}
                </div>
            </template>
        </div>
        <template v-for="(group ,index) in groupData.cities" :key="index">
            <van-index-anchor :index="group.group" />
            <template v-for="(city ,indey) in group.cities" :key="indey" >
                <van-cell :title="city.cityName" />
            </template>
         </template>
        
      </van-index-bar>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    groupData: {
        type: Object,
        default:()=>({})
    }
})
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift("#")
    return list
})
</script>
<style lang="less" scoped>
.list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
    .city {
        width: 74px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 10px 0;
    }
}
</style>
