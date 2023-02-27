import {defineComponent, watch, ref, shallowReactive} from 'vue';
import * as echarts from 'echarts';
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()

    let options = {}
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        
        options = {

          color:['#82B7FE', '#E6759E', '#1E87BB'],

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '4%',
            right: '12%',
            bottom: '20%',
            containLabel: true
          },
          legend: {
            type: "plain",
            left : 'center',
            textStyle: {
              fontSize: 18
            }
          },
          xAxis: {
            type: 'category',
            data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
            axisLabel: {
              show: true,
              fontSize: 16
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              fontSize: 16
            },
            min:'dataMin'
          },
          series: [
            {
              name: 'HTTP测试',
              data: [82, 93, 90, 93, 90, 70, 86],
              type: 'line',
              smooth: true
            },
            {
              name: 'GetCapabilities测试',
              data: [90, 80, 90, 82, 72, 89, 73],
              type: 'line',
              smooth: true
            },
            {
              name: 'GetMap测试',
              data: [56, 75, 65, 73, 75, 76, 63],
              type: 'line',
              smooth: true
            },
          ]
        };
        
        
        

        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options)
        }
      },
      {
        immediate: true,
        deep: true
      }
    )
    return () => {
      const height = "300px"
      const width = "650px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})