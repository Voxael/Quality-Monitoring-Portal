<template>
  <div class="geo2Right1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
<!--        <span>-->
<!--          <i class="iconfont icon-tongji4" />-->
<!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2">错误类型占比</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="bottom-data">
        <chart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted,  reactive } from 'vue'
import Chart from './chart/index'
export default defineComponent({
  components: {
    Chart
  },
  setup() {
    // 下层数据
    const dataArr = [
      {
        number: 150,
        text: '今日构建总量'
      },
      {
        number: 144,
        text: '总共完成数量'
      },
      {
        number: 361,
        text: '正在编译数量'
      },
      {
        number: 571,
        text: '未通过数量'
      }
    ]
    // 对应图标
    const iconFont = [
      'icon-diagnose',
      'icon-monitoring',
      'icon-cloudupload',
      'icon-clouddownload'
    ]
    const numberData = reactive([])
    let intervalInstance = null
    onMounted(() => {
      setData()
      changeTiming()
    })

    const setData = () => {
      dataArr.forEach(e => {
        numberData.push({
          config: {
            number: [e.number],
            toFixed: 1,
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: e.text
        })
      })
    }

    const changeTiming = () => {
      intervalInstance = setInterval(() => {
        changeNumber()
      }, 2000)
    }
    const changeNumber = () => {
      numberData.forEach((item, index) => {
        item.config.number[0] += ++index
        item.config = { ...item.config }
      })
    }
    onUnmounted(() => {
      clearInterval(intervalInstance)   
    })

    return { numberData, iconFont}
  }
})
</script>

<style lang="scss" scoped>
$box-width: 400px;
$box-height: 320px;

.geo2Right1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    position: relative;
    top: -10px;
    left: -10px;
    color: bisque;
    font-size: 20px;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -10px;
    left: -10px;
  }

  .bottom-data {
    position: relative;
    left: -50px;
    top: 20px;
  }
}

</style>
