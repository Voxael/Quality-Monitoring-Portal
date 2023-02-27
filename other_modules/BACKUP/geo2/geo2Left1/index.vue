<template>
  <div class="geo2Left1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
<!--        <span>-->
<!--          <i class="iconfont icon-tongji4" />-->
<!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2">数据统计</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="bottom-data">
        <div class="item0">
          <p class="item1">XX主题数据总数</p>
          <dv-digital-flop class="item2" :config="config"/>
        </div>
        <chart class="item3"/>
      </div>
    </div>
  </div>>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted,  reactive } from 'vue'
import Chart from './chart'

export default defineComponent({
  components: {
    Chart
  },
  setup() {
    const config = reactive(
        {
          number: [1680],
          toFixed: 1,
          content: '{nt}个',
          style: {
            fontSize: 48
          }
        }
    )

    return {config}
  }
})
</script>

<style lang="scss" scoped>
$box-width: 520px;
$box-height: 350px;

.geo2Left1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: bisque;
    font-size: 20px;
    position: relative;
    left: -15px;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item0 {
      display: flex;
    }
    .item1 {
      font-size: 30px;
      width: 350px;
      position: relative;
      margin: 20px;
    }
    .item2 {
      position: relative;
      top: -10px;
    }
    .item3 {
      position: relative;
      top: -70px;
      left: -40px;
    }
  }
}
</style>
