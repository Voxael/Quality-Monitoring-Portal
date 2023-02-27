<template>
  <div class="geoBottom2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-tongji4" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">数据告警</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="bottom-data">
        <div class="item0" />
        <div>
          <p>ID:</p>
          <p>名称:</p>
          <p>错误类型:</p>
          <p>持续时间:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted,  reactive } from 'vue'

export default defineComponent({
  setup() {
    const dataArr = [
      {
        number: 70,
        text: '监测服务器一'
      },
      {
        number: 70,
        text: '监测服务器二'
      },
      {
        number: 70,
        text: '监测服务器三'
      },
    ]

    const numberData = reactive([])
    let intervalInstance = null
    onMounted(() => {
      setData()
      // changeTiming()
    })

    const setData = () => {
      dataArr.forEach(e => {
        numberData.push({
          config1: {
            number: [e.number],
            toFixed: 1,
            content: '{nt}%',
            style: {
              fontSize: 24,
              fill:	'#FFFACD'
            }
          },
          config2: {
            value: e.number,
            borderWidth: 1,
            formatter: ''
          },
          text: e.text
        })
      })
    }
    // const changeTiming = () => {
    //   intervalInstance = setInterval(() => {
    //     changeNumber()
    //   }, 2000)
    // }
    // const changeNumber = () => {
    //   numberData.forEach((item, index) => {
    //     item.config.number[0] += ++index
    //     item.config = { ...item.config }
    //   })
    // }
    // onUnmounted(() => {
    //   clearInterval(intervalInstance)
    // })
    return {numberData }
  }
})
</script>

<style lang="scss" scoped>
$box-width: 500px;
$box-height: 200px;

.geoBottom2 {
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
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    display: flex;
    .item0 {
      width: 100px;
      height: 100px;
      background-color: #33cea0;
      border-radius: 10px;
      opacity: 0.2;
      position: relative;
      top: 20px;
      left: 50px;
    }
    p {
      position: relative;
      left: 120px;
      top:10px;
      margin: 10px;
    }
  }
}

</style>
