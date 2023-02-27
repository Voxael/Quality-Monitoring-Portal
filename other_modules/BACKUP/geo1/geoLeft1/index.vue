<template>
  <div class="geoLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-tongji4" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">数据统计</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="bottom-data">
        <div class="item0">
          <div class="item1">
            <div class="item2">
              <p class="item3">Web服务</p>
              <dv-digital-flop class="item4" :config="config1"/>
            </div>
            <Chart :name="char1" ref="gl1_in1"/>
          </div>
          <div class="item1">
            <div class="item2">
              <p class="item3">数字资产对象</p>
              <dv-digital-flop class="item4" :config="config2"/>
            </div>
            <Chart :name="char2" ref="gl1_in2"/>
          </div>
        </div>

<!--        <div-->
<!--        class="item0"-->
<!--        v-for="(item, index) in numberData"-->
<!--        :key="index">-->
<!--          <div class="item1">-->
<!--            <div class="item2">-->
<!--              <p class="item3">{{item.text}}</p>-->
<!--              <dv-digital-flop class="item4" :config="item.config" />-->
<!--            </div>-->
<!--            <Chart :name="item.type" ref="gl1_in"/>-->
<!--          </div>-->
<!--        </div>-->



      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, reactive, ref, onUpdated, nextTick} from 'vue'
import Chart from './chart'
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    Chart
  },
  setup(propos, {expose}) {
    const config1 = ref({
      number: [1687],
      // toFixed: 1,
      content: '{nt}个',
      style: {
        fontSize: 24,
        fill:	'#FFFACD'
      }
    })

    const config2 = {
      number: [1253],
      // toFixed: 1,
      content: '{nt}个',
      style: {
        fontSize: 24,
        fill:	'#FFFACD'
      }
    }

    const char1 = ref('char1')
    const char2 = ref('char2')


    const dataArr = [
      {
        number: 1687,
        text: 'Web服务',
        type: 'char1'
      },
      {
        number: 1253,
        text: '数字资产对象',
        type: 'char2'
      },
    ]

    const numberData = reactive([])
    //获取dom
    const gl1_in1 = ref()
    const gl1_in2 = ref()
    // const gl1_in = (el) => {
    //   my_gl_in.value.push(el)
    // }

    const getgl1_in_dom1 = () =>
    {
      return gl1_in1.value.gl1_ch()
      // return my_gl_in.value[0].gl1_ch()
    }

    const getgl1_in_dom2 = () =>
    {
      return gl1_in2.value.gl1_ch()
    }

    onMounted(() => {
      setData()
      // setTimeout(() => {console.log(gl1_in.value)},1000)
    })


    const setData = () => {
      dataArr.forEach(e => {
        numberData.push({
          config: {
            number: [e.number],
            // toFixed: 1,
            content: '{nt}个',
            style: {
              fontSize: 24,
              fill:	'#FFFACD'
            }
          },
          text: e.text,
          type: {
            geoty: e.type,
            geoch: null
          },
        })
      })
    }

        // fill: '#3de7c9',

    expose({
      getgl1_in_dom1,
      getgl1_in_dom2
    })

    return {
      numberData,
      // my_gl_in
      gl1_in1,
      gl1_in2,
      config1,
      config2,
      char1,
      char2
    }
  }
})
</script>

<style lang="scss" scoped>
$box-width: 500px;
$box-height: 420px;

.geoLeft1 {
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
    .item0 {
      flex-direction: row;
      //height: 170px;
    }
    .item1 {
      display: flex;
      position: relative;
      top: -20px;

    }
    .item2 {
      background-image: url("@/assets/scss/img/circle.jpg");
      border-radius: 50%;
      width: 150px;
      height: 150px;
      background-position: center;
      background-size: 150%;
      background-repeat: no-repeat;
      margin: 25px;
    }
    .item3 {
      font-size: 20px;
      position: relative;
      top: 50px;
      left: 0px;
      text-align: center;
      //-moz-box-align: center;
    }
    .item4 {
      position: relative;
      top: 40px;
    }


  }
}
</style>
