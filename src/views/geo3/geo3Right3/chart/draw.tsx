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
          
          tooltip: {
            trigger: 'item'
          },
          color:[
            '#85c1e9',
           '#5dade2',
            '#3498db',
            '#2874a6',
            '#2e86c1'],

          legend: {
            orient: 'vertical',
            top: '25%',
            right : 20,
            type: "plain",
            textStyle: {
              fontSize: 18
            }
          },
          
          series: [
            {
              name: '相似度指标',
              type: 'pie',
              radius: ['0%', '70%'],
              center: ['40%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 4
              },
              label:{
                color:"#fff",
                normal:{
                  show:true,
                  textStyle:{
                    fontSize:18
                  },
                  color:"#fff"
                },
                emphasis:{
                  //show:false
                }
              },
              data: [
                { value: 30, name: '文本描述' },
                { value: 25, name: '使用频次' },
                { value: 20, name: '服务类型' },
                { value: 15, name: '覆盖范围' },
                { value: 10, name: '服务提供者' }
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
      const height = "250px"
      const width = "600px"

      return <div>
        <echart ref={chartRef} height={height} width={width} />
      </div>
    }
  }
})