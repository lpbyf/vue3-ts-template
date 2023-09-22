<script setup lang="ts">
import { ref } from 'vue'
import { getTodayDatAPI } from '@/services/myTest'
const title = ref('Hello')

const getTodayData = async () => {
  const res = await getTodayDatAPI()
  //bannerList.value = res.result
  console.log(res);  
}
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="getTodayData" type="primary" >primary</button>
  </view>
</template>
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
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
}
</style>
