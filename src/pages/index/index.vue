<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getTodayDatAPI } from "@/services/myTest";

import { onLoad } from "@dcloudio/uni-app";
// import MyTryEcharts from "@/components/MyTryEcharts.vue";
import MyUchartsDayData from '@/components/MyUchartsDayData.vue';
import  getServerData  from '@/components/MyUchartsDayData.vue';

import type { EChartsOption } from 'echarts';
// const title = ref("Hello");

const getTodayData = async () => {
  const res = await getTodayDatAPI();
  //bannerList.value = res.result
  console.log(res);
};

// 页面加载
onLoad(() => {

});

onMounted(() => {
});

const clickTest1 = () => {
  console.log('点击了！');  
};
</script>

<template>
  <view class="content">
    <button @click="getTodayData" type="primary">网络请求</button>
    <button @click="clickTest1" type="primary">点击测试</button>
  </view>
  <MyUchartsDayData />
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#chart {
  width: 400px;
  height: 400px;
}

/* .logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
} */
</style>
