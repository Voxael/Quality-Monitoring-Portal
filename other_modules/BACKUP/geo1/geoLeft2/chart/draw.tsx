import {defineComponent, watch, ref, shallowReactive, nextTick, onMounted} from 'vue';
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
  setup(props,{ expose }) {
    // 定义 ref
    const chartRef = ref()

    let options = {}
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          title: {
            text: 'ggggggggg',
            show: false
          },
          legend: {
            top: 'bottom',
            data: ['Intention']
          },
          tooltip: {
            triggerOn: 'none',
            position: function (pt) {
              return [pt[0], 130];
            }
          },
          toolbox: {
            left: 'center',
            itemSize: 25,
            top: 55,
            feature: {
              dataZoom: {
                show: true
              },
              dataView: { show: false, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: false },
              saveAsImage: { show: false },
            }
          },
          xAxis: {
            type: 'time',
            axisPointer: {
              value: '2016-10-7',
              snap: true,
              lineStyle: {
                color: '#7581BD',
                width: 2
              },
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('yyyy-MM-dd', params.value);
                },
                backgroundColor: '#7581BD'
              },
              handle: {
                show: true,
                size: [20,20],
                color: '#7581BD'
              }
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              inside: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              inside: true,
              formatter: '{value}\n'
            },
            z: 10
          },
          grid: {
            top: 110,
            left: 15,
            right: 15,
            height: 160
          },
          dataZoom: [
            {
              type: 'inside',
              throttle: 50
            }
          ],
          series: [
            {
              name: 'httpServe',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#0770FF'
              },
              stack: 'a',
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(58,77,233,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(58,77,233,0.3)'
                  }
                ])
              },
              data: val.data1
            },
            {
              name: 'getCapabilities',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#F2597F'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(213,72,120,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(213,72,120,0.3)'
                  }
                ])
              },
              data: val.data2
            },
            {
              name: 'generated',
              type: 'line',
              smooth: true,
              stack: 'a',
              symbol: 'circle',
              symbolSize: 5,
              sampling: 'average',
              itemStyle: {
                color: '#FFFACD'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(255,248,220,0.8)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,248,220,0.3)'
                  }
                ])
              },
              data: val.data3
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

    const gl2_ch_dr = () => {
      return chartRef.value.getmydom()
    }

    // onMounted(() => {
    //   console.log(gl2_ch_dr())
    // })

    expose({
      gl2_ch_dr
    })

    return () => {
      const height = "350px"
      const width = "500px"
      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})