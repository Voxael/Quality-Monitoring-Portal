import {defineComponent, watch, ref, shallowReactive} from 'vue';
import * as echarts from 'echarts';
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  },
  // tips: {
  //   type: Number,
  //   default: 50,
  //   require: true,
  // },
  // colorObj: {
  //   type: Object,
  //   default: () => ({
  //     textStyle: "#3fc0fb",
  //     series: {
  //       color: ["#00bcd44a", "transparent"],
  //       dataColor: {
  //         normal: "#03a9f4",
  //         shadowColor: "#97e2f5",
  //       },
  //     },
  //   }),
  // },
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
          color:['#343077','#9C599E', '#E6759E', '#1E87BB'],

          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            //top: '5%',
            //left: 'right',
            right: '0%',
            top: '25%',
            textStyle: {
              fontSize: 18
            }
          },
          series: [
            {
              name: '错误类型',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['45%', '45%'],
              avoidLabelOverlap: true,
              itemStyle: {
                borderRadius: 6,
                borderColor: '#fff',
                borderWidth: 1
              },
              label: {
                show: false,
                //color:"#fff",
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 25,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: true
              },
              data: [
                { value: 1048, name: '成功响应' },
                { value: 735, name: '服务器内部错误' },
                { value: 580, name: '客户端错误' },
                { value: 484, name: '服务无法访问' }
              ]
            }
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
      const height = "280px"
      const width = "475px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})