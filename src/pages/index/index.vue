<template>
  <view class="content flex column ">
    <image class="logo" src="/static/img/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <text class="title" @click="network()">点我发起请求</text>
    <text class="title" @click="changeId()">点我修改下面的值</text>
    <XingHelloWorld :msg="user.id" />
    <u-button >默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="info">信息按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error">危险按钮</u-button>
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
      this.$store.dispatch('user/setId', Math.random(100))
    },
    network() {
      this.$api.user.test().then((response) => {
        console.log(`成功${response}`)
      }).catch((error) => {
        console.log(`失败${error}`)
      })
    },
    network2() {
      this.$api.user.download().then((response) => {
        console.log(`成功${response}`)
      }).catch((error) => {
        console.log(`失败${error}`)
      })
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
