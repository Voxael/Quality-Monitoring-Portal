<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColors" />
            <div class="title">
              <span class="title-text">{{ title }}</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColors"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
              </span>
            </div>
            <div class="react-left ml-3">
              <span class="text">{{ subtitle[1] }}</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-black mr-3">
              <span class="text fw-b">{{ subtitle[2] }}</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>
<!--        从这里开始看-->
        <div class="body-box">
          <div class="item-body">
            <!-- 第一列数据 -->
            <div class="left-box">
              <div>
                <dv-border-box-12>
                  <geo-left1 ref="gl1"></geo-left1>
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                  <geo-left2 ref="gl2"></geo-left2>
                </dv-border-box-12>
              </div>
            </div>

            <!-- 第二列数据 -->
            <div class="center-box">
              <div>
                <dv-border-box-12>
                  <geo-center/>
                </dv-border-box-12>
              </div>
            </div>

            <!-- 第三列数据 -->
            <div class="right-box">
              <div>
                <dv-border-box-12>
                  <geo-right1/>
                </dv-border-box-12>
              </div>
            </div>
          </div>
          <div class="bottom-box">
            <div>
              <dv-border-box-12>
                <geo-bottom2/>
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <geo-bottom />
              </dv-border-box-12>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted, nextTick,
} from 'vue'
import { formatTime } from '@/utils'
import { WEEK } from '@/constant/index'
import useDraw from '@/utils/useDraw'
import { title, subtitle, moduleInfo } from '@/constant/index'
import GeoLeft1 from "../geoLeft1/index.vue";
import GeoLeft2 from "../geoLeft2/index.vue";
import GeoBottom2 from "../geoBottom2/index.vue";
import GeoBottom from "../geoBottom/index.vue";
import GeoCenter from "../geoCenter/index.vue";
import GeoRight1 from "../geoRight1/index.vue";
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    GeoLeft2,
    GeoCenter,
    GeoBottom2,
    GeoBottom,
    GeoLeft1,
    GeoRight1
  },
  setup() {

    // dom
    const gl1 = ref()
    const gl1doms = {
      gl1dom1: null,
      gl1dom2: null
    }
    const gl2 = ref()
    const gl2doms = {
      gl2dom: null
    }
    // * 颜色
    const decorationColors = ['#568aea', '#000000']
    // * 加载标识
    const loading = ref<boolean>(true)
    // * 时间内容
    const timeInfo = reactive({
      setInterval: 0,
      dateDay: '',
      dateYear: '',
      dateWeek: ''
    })

    // * 适配处理
    const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw()




    // 生命周期
    onMounted(() => {
      cancelLoading()
      handleTime()
      // todo 屏幕适应
      windowDraw()
      calcRate()
      getdom
      })

    //获取dom

    const getdom = setTimeout(() => {
      //测试点击事件
      gl1doms.gl1dom1 = gl1.value.getgl1_in_dom1()
      gl1doms.gl1dom2 = gl1.value.getgl1_in_dom2()
      gl2doms.gl2dom = gl2.value.getgl2_in_dom()
      gl1doms.gl1dom1.on('mouseover',function(params) {
          gl2.value.resetDate()
      })
      gl1doms.gl1dom2.on('mouseover',function(params) {
          gl2.value.resetDate()
      })


      // gl1doms.gl1dom1.on('click',function(params) {
      //   console.log('hhh')
      //   })
    },1000)
    onUpdated(() => {
      // getdom1()
    })

    onUnmounted(() => {
      unWindowDraw()
      clearInterval(timeInfo.setInterval)
    })


    // methods
    // todo 处理 loading 展示
    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false
      }, 500)
    }

    // todo 处理时间监听
    const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date()
        timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
        timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
        timeInfo.dateWeek = WEEK[date.getDay()]
      }, 1000)
    }

    // return
    return {
      loading,
      timeInfo,
      appRef,
      title,
      subtitle,
      moduleInfo,
      gl1,
      gl2
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss';
</style>
