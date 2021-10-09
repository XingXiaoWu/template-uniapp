<template>
  <view class="content flex column ">
    <image class="logo" src="/static/img/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <text @click="changeId()">点我修改下面的值</text>
    </view>
    <HelloWorld :msg="user.id" />
  </view>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  data() {
    return {
      title: 'Hello1',
      aaa: this.$store.state.user.id,
    }
  },
  onLoad() {},
  methods: {
    changeId() {
      console.log(this.$store)
      this.$store.dispatch('user/setId', '456')
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
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
