import {defineComponent, reactive, onMounted, ref, onUnmounted, watch} from 'vue';
// import Draw from './draw'
import * as echarts from "echarts";

export default defineComponent({
  // components: {
  //   Draw
  // },
  setup(propos, { expose }) {
    //定义echarts大小
    const height = "350px"
    const width = "500px"


    let base = +new Date(2016, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let valueBase = Math.random() * 300;
    let valueBase2 = Math.random() * 50;
    let valueBase3 = Math.random() * 150;
    let data = [];
    let data2 = [];
    let data3 = [];
    const cdata = reactive({
      data1: data,
      data2: data2,
      data3: data3,
    })
    const setDate = () => {
      cdata.data1 = []
      cdata.data2 = []
      cdata.data3 = []
      for (var i = 1; i < 10; i++) {
        var now = new Date((base += oneDay));
        var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 300);
        cdata.data1.push([dayStr, valueBase]);
        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        cdata.data2.push([dayStr, valueBase3]);
        valueBase3 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase3 <= 0 && (valueBase2 = Math.random() * 150);
        cdata.data3.push([dayStr, valueBase3]);
    }
    }

    //继承echarts
    const chartRef = ref()

    let options = {}

    //监听cdata
    watch(
      () => cdata,
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

    //返回dom元素
    const gl2_ch = () => {
      return chartRef.value.getmydom().mydom
    }

    onMounted(() => {
      setDate()
    })

    expose({
      gl2_ch,
      setDate
    })

    //因为有了'ref={chartRef}所以才可以用'const chartRef = ref()进行引用''
    return () => {
      return (
      <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
      )
    }
    }
})