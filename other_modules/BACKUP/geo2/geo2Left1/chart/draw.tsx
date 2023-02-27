import { defineComponent, ref, watch, shallowReactive } from 'vue'

// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref()
    // 配置项
    let options = {}
    watch(
        () => props.cdata,
        (val:any) => {
            options = {
              tooltip: {
                trigger: 'item'
              },
              legend: {
                top: '50px',
                right: '50px',
                orient: 'vertical'
              },
              color: ['#B0E0E6', '#6A5ACD', '#000080', '#4B0082', '#00FFFF'],
              series: [
                {
                  name: 'XX主题数据统计',
                  type: 'pie',
                  radius: ['60%', '70%'],
                  avoidLabelOverlap: false,
                  itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                  },
                  label: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: 20,
                      fontWeight: 'bold',
                      scaleSize: 30
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: [
                    { value: 1048, name: '子主题1' },
                    { value: 735, name: '子主题2' },
                    { value: 580, name: '子主题3' },
                    { value: 484, name: '子主题4' },
                    { value: 300, name: '子主题5' }
                  ]
                }
              ]
            };
        //手动触发更新
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
        const width = "500px"

        return <div>
            <echart ref={chartRef} options={options} height={height} width={width}/>
        </div>
    }
  }
}
)