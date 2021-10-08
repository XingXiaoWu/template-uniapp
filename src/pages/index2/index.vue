<template>
  <view class="content">
    <image class="logo" src="/static/img/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <HelloWorld msg="uniapp"/>
  </view>
</template>

<script>
import HelloWorld from '@/components/HelloWorld/index.vue'

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: 'Hello1',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}
</style>
