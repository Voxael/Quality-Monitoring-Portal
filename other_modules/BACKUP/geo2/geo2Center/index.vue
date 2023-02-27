<template>
  <div class="geo2Center">
    <div class="bg-color-black">
      <div>
        <chart class="chart"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Chart from './chart/index'
import 'echarts/extension/bmap/bmap';
export default defineComponent({
  components: {
    Chart,
  }
})
</script>

<style lang="scss" scoped>
.geo2Center {
  $box-width: 100px;
  $box-height: 600px;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .chart {
    .BMap_cpyCtrl {
      display: none;
    }

    .anchorBL {
      display: none;
    }
  }
}
</style>
