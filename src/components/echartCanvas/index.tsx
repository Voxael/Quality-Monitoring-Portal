import {defineComponent, onMounted, ref, watch, onBeforeUnmount, reactive, nextTick} from 'vue'
import '@/common/echart/map/fujian.js'
import theme from '@/common/echart/style/theme.js' // 引入默认主题
import * as echarts from 'echarts'
import {prop} from "vue-class-component";

// 定义类型
const PropsType = {
  // 图表唯一 id
  id: String,
  // 图表类名
  className: {
    type: String,
    default: 'chart'
  },
  // 图表宽度
  width: {
    type: String,
    require: true
  },
  // 图表高度
  height: {
    type: String,
    require: true
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => ({}),
  }
} as const

export default defineComponent({
  name: 'Echarts',
  props: PropsType,
  setup(props, { expose }) {
    const chartRef = ref<HTMLElement>()
    const charts = {
      chart: null
    }
    /**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清除缓存
     */
    const mydoms = {
      mydom: null
    }
    const initChart = (data?: any, clearCaching = false) => {
      if (data || props.options) {
        charts.chart.setOption(data || props.options, clearCaching)
      }
    }
    const getmydom = () => {
      return mydoms
    }
    // 生命周期
    onMounted(() => {
      // 定义实例
      echarts.registerTheme('myTheme', theme) // 覆盖默认主题
      charts.chart = echarts.init(chartRef.value, 'myTheme')
      initChart()
      mydoms.mydom = echarts.getInstanceByDom(chartRef.value)

      // if (props.options.title != undefined){
      //   if (props.options.title.text == 'geoleft1') {
      //     geore = echarts.getInstanceByDom(chartRef.value)
      //   }}
      //   if (props.options.title.text == 'geoleft2') {
      //     // geore = echarts.getInstanceByDom(chartRef.value)
      //     console.log('qqqq')
      //   }
      // }

      // if (geore != null){
      //   geore.on('click',function(params) {//用于做每个点的监听，只用点击点才能够获取想要的监听效果；
      //   console.log('hhh')
      //   })}
    })
    onBeforeUnmount(() => {
      charts.chart.dispose()
      charts.chart = null
    })

    // 监听改变
    watch(
      () => props.options,
      val => {
        val && initChart(val)
      },
      {
        deep: true
      }
    )
    // charts.chart.on('click',function(params){//用于做每个点的监听，只用点击点才能够获取想要的监听效果；
    //     let data = {
    //     x: params.name,
    //     y: params.value
    //     }
    //     console.log(data)
    //     // alert(JSON.stringify(data))
    // });
    // 对外暴露接口
    expose({
      chartRef,
      initChart,
      getmydom
      }
    );

    return () => {
      const { id, className, height, width } = props
      return <div
        ref={chartRef}
        id={id as string}
        class={className as string}
        style={{
          'height': height as string,
          'width': width as string
        }}
      />
    }
  }
})