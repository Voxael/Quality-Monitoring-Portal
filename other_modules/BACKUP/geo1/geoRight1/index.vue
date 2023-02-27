<template>
  <div class="geoRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-tongji4" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">服务器状态</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="bottom-data">
        <div
        class="item-box"
        v-for="(item, index) in numberData"
        :key="index">
          <div>
            <p>
              <span class="itt1"> {{item.text}} </span>
            </p>
            <div class="d-flex">
              <div class="flex-column">
                <div class="item0">
                  <div>
                    <p style="opacity: 0.7">CPU Utility</p>
                    <p class="item1">CPU占用率</p>
                  </div>
                  <div>
                    <dv-digital-flop class="item2" :config="item.config1" style="height: 50px; width: 100px"/>
                  </div>
                </div>
                <dv-decoration-10 style="width:60%;height:1px;" />
                <div class="item0">
                  <div>
                    <p style="opacity: 0.7">System Memory Usage</p>
                    <p class="item3">系统内存使用率</p>
                  </div>
                  <div>
                    <dv-digital-flop class="item4" :config="item.config1" style="height: 50px; width: 100px"/>
                  </div>
                </div>
                <dv-percent-pond :config="item.config2" style="width:200px;height:10px;" />
              </div>
<!--              <img src="@/assets/scss/img/deng.jpg" />-->
<!--                <img :src="">-->
              <div class="item5">
                <div class="item7">
                  <div>
                    <p style="opacity: 0.7;">Disk</p>
                    <p class="item8">磁盘空间</p>
                  </div>
                  <dv-decoration-9 class="item6" style="height:50px;width: 50px">66%</dv-decoration-9>
                </div>
                <div class="item7">
                  <div>
                    <p style="opacity: 0.7;">VM</p>
                    <p class="item8">虚拟内存</p>
                  </div>
                  <dv-decoration-9 class="item6" style="height:50px;width: 50px">66%</dv-decoration-9>
                </div>
              </div>
            </div>
          </div>
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
$box-width: 480px;
$box-height: 700px;

.geoRight1 {
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
    .item-box {
      height: 210px;
      margin:10px;
      //float: right;
      //position: relative;
      //width: 100px;
      //flex-direction: column;
      .itt1 {
        font-size: 25px;
        margin:10px;
      }
      .item0 {
        float: left;
        display: flex;
        margin:15px;

      }
      .item1 {
        width: 150px;
        height: 10px;
        font-size: 20px;
        position: relative;
      }
      .item2 {
        width: 100px;
        position: relative;
        top: 0px;
      }

      .item3 {
        width: 150px;
        height: 10px;
        font-size: 20px;
        position: relative;
        top: 0px;
      }

      .item4 {
        width: 100px;
        position: relative;
        top: 0px;
        //left: 0px
      }
      .item5 {
        position: relative;
        left: -25px;
        width: 65px;
        float: right;
        text-align: right;
      }
      .item6 {
        position: relative;
        left: 5px;
      }
      .item7 {
        display: flex;
      }
      .item8 {
        width: 150px;
        height: 10px;
        font-size: 20px;
        position: relative;
        top: 0px;
      }
      img {
        //border: 1px solid #ddd;
        border-radius: 50%;
        padding: 5px;
        width: 120px;
        height: 100px;
        position: relative;
        top: 30px;
        left: -20px;
      }

    }
  }
}
</style>
