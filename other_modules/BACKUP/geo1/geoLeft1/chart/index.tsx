import {defineComponent, nextTick, onMounted, onUnmounted, reactive, ref, shallowReactive, watch} from 'vue'
// import Draw from './draw'
export default defineComponent({
  // components: {
  //   Draw,
  // },
  props: {
      name:{
          type: String
          }},
  setup(props, {expose}){
      const chartRef = ref()
      let options = {}
      //定义组件大小
      const height = "200px"
      const width = "260px"
      //定义数据
      const seriesData1 = [
        { value: 1048, name: '服务1' },
        { value: 735, name: '服务2' },
        { value: 580, name: '服务3' },
        { value: 484, name: '服务4' },
        { value: 300, name: '服务5' }
              ];
        // const showtry = () => {
        //   console.log('hhh')
        // }
      const seriesData2 = [
        { value: 1048, name: '资源1' },
        { value: 735, name: '资源2' },
        { value: 580, name: '资源3' },
        { value: 484, name: '资源4' },
        { value: 300, name: '资源5' }
      ];
      // const indic1 =[
      //   { name: '服务1', max: 6500 },
      //   { name: '服务2', max: 6500 },
      //   { name: '服务3', max: 6500 },
      //   { name: '服务4', max: 6500 },
      //   { name: '服务5', max: 6500 },
      //   { name: '服务6', max: 6500 }
      //         ];
      // const indic2 =[
      //   { name: '资源1', max: 6500 },
      //   { name: '资源2', max: 6500 },
      //   { name: '资源3', max: 6500 },
      //   { name: '资源4', max: 6500 },
      //   { name: '资源5', max: 6500 },
      //   { name: '资源6', max: 6500 }
      //         ];
      // const legend1 = ['服务占比'];
      // const legend2 = ['资源占比'];
      const cdata = reactive({
        seriesData : null,
        // indicator: null,
        // legend: null
        })

      if (props.name == 'char1'){
        cdata.seriesData = seriesData1
        // cdata.indicator = indic1
        // cdata.legend = legend1
        }
      else {
        cdata.seriesData = seriesData2
        // cdata.indicator = indic2
        // cdata.legend = legend2
        }
      watch(() => cdata,
        (val:any) => {
            options = {
          tooltip: {
            trigger: 'item',
            show: true
          },
          legend: {
            top: '5%',
            left: 'center',
            show: false
          },
          color: ['#B0E0E6', '#6A5ACD', '#000080', '#6495ED', '#4B0082', '#00FFFF'],
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['60%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 1,
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
                  fontSize: 30,
                  fontStyle: "italic",
                  fontWeight: 'bold',
                  color: "rgb(0, 208, 255, 1)"
                }
              },
              labelLine: {
                show: false
              },
              data: val.seriesData
            }
          ]
        };

        //手动触发更新
        if (chartRef.value) {
              // 通过初始化参数打入数据
              chartRef.value.initChart(options);
            }
        },
        {
        immediate: true,
        deep: true
        });


      const gl1_ch = () => {
        return chartRef.value.getmydom().mydom
        }

      expose({
          gl1_ch
        })

        // console.log('_____',cdata.seriesData)
      return () => {
          return <div>
            <echart ref={chartRef} options={options} height={height} width={width}/>
        </div>
    }
    },
})