<template>
  <div>
    <div class="tabbar bg-black py-2 px-3 d-flex ai-center">
      <img
        src="../assets/logo.png"
        style="height: 29px; border-radius: 2px"
        alt=""
      />
      <div class="px-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" href="" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse text-white jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tabbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>