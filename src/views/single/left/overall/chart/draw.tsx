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

          color:['#1E87BB', '#E6759E'],

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '7%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          // textStyle:{
          //   fontSize  : 18
          // } ,
          legend: {
            type: "plain",
            left : '30%',
            top:'5%',
            textStyle: {
              fontSize: 18
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                show: true,
                fontSize: 16
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                show: true,
                fontSize: 16
              }
            }
          ],
          series: [
            {
              name: '柱状展示',
              type: 'bar',
              barWidth: '35%',
              data: [25, 52, 70, 34, 90, 30, 85],

              //showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },
              itemStyle: {
                emphasis: {
                  barBorderRadius: [10,10,0,0],
                },
                normal: {
                  barBorderRadius: [10,10,0,0],
                },
              },
            },
            {
              name: '折线展示',
              data: [25, 52, 70, 34, 90, 30, 85],
              type: 'line',
              smooth: true
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
      const height = "250px"
      const width = "475px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})