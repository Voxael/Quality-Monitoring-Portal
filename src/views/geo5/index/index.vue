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
          
            <!-- 第一列数据 -->
            <div class="top-box">
              <div>
                <dv-border-box-12>
                  <geo5-top1 />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                  <geo5-top2 />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                   <geo5-top3 />
                </dv-border-box-12>
              </div>
            </div>

            <!-- 第二列数据 -->
            <div class="mid-box">
              <div>
                <dv-border-box-12>
                   <geo5-mid1/> 
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                   <geo5-mid2 />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                   <geo5-mid3 /> 
                </dv-border-box-12>
              </div>
            </div>

            <!-- 第三列数据 -->
            <div class="bottom-box">
              <div>
                <dv-border-box-12>
                  <geo5-bottom1/> 
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                   <geo5-bottom2 />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                   <geo5-bottom3 />
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
import Geo5Top1 from "../geo5Top1/index.vue";
import Geo5Top2 from "../geo5Top2/index.vue";
import Geo5Top3 from "../geo5Top3/index.vue";
import Geo5Mid1 from "../geo5Mid1/index.vue";
import Geo5Mid2 from "../geo5Mid2/index.vue";
import Geo5Mid3 from "../geo5Mid3/index.vue";
import Geo5Bottom1 from "../geo5Bottom1/index.vue";
import Geo5Bottom2 from "../geo5Bottom2/index.vue";
import Geo5Bottom3 from "../geo5Bottom3/index.vue";
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    
    Geo5Top1,
    Geo5Top2,
    Geo5Top3,

    Geo5Mid1,
    Geo5Mid2,
    Geo5Mid3,

    Geo5Bottom1,
    Geo5Bottom2,
    Geo5Bottom3
  },
  setup() {

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
     // getdom
      })

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
      moduleInfo
      
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/geo5index.scss';
</style>
