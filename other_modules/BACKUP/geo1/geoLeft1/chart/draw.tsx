import {defineComponent, ref, watch, shallowReactive, onMounted, onUpdated, nextTick} from 'vue'
import Chart from "@/views/geo1/geoLeft1/chart/index";
import * as echarts from 'echarts'
import theme from "@/common/echart/style/theme";
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
      let options = shallowReactive({title:null, tooltip:null, legend:null,radar:null,series:null})

      watch(
        () => props.cdata,
        (val:any) => {
        options = {
            title: {
              text: 'geoleft1',
              show: false
            },
            tooltip: {},
            legend: {
                textStyle: {
                fontWeight: "lighter",
                fontSize: 13
            },
                data: val.legend,
                show: false
            },
            radar: {
        // shape: 'circle',
              indicator: val.indicator,
              radius: ['0%', '55%'],
              axisName:{
                  fontWeight: "lighter",
                  fontSize: 13,
                  color: "rgba(255, 255, 255)"
              }
            },
            series: [
              {
                name: 'Budget vs spending',
                type: 'radar',
                data: val.seriesData,
              }
              ]
        }
        //手动触发更新
        if (chartRef.value) {
              // 通过初始化参数打入数据
              chartRef.value.initChart(options);
            }
        },
        {
        immediate: true,
        deep: true
        }
      );
      return () => {
        const height = "200px"
        const width = "260px"

        return <div>
            <echart ref={chartRef} options={options} height={height} width={width}/>
        </div>
    }
  }
}
)