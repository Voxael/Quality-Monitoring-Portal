<template>
  <div class="geoCenter">
    <div class="bg-color-black">
      <div class="bottom-data">
          <div>
            <Chart/>
          </div>
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
    const iconFont = [
      'icon-diagnose',
      'icon-monitoring',
      'icon-cloudupload',
      'icon-clouddownload'
    ]
    return {iconFont}
  }
})
</script>

<style lang="scss" scoped>
$box-width: 1000px;
$box-height: 720px;

.geoCenter {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    position: relative;
    left: -10px;
  }
}
</style>
