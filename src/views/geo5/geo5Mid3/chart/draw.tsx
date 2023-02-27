import { defineComponent, watch, ref, shallowReactive } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref();

    let options = {};
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          // title: {
          //   show:false,
          //   text: "Beijing AQI",
          //   left: "1%",
          // },
          tooltip: {
            trigger: "axis",
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%",
          },
          xAxis: {
            data: [
              "2022/07/01",
              "2022/07/02",
              "2022/07/03",
              "2022/07/04",
              "2022/07/05",
              "2022/07/06",
              "2022/07/07",
              "2022/07/08",
              "2022/07/09",
              "2022/07/10",
              "2022/07/11",
              "2022/07/12",
              "2022/07/13",
              "2022/07/14",
              "2022/07/15",
              "2022/07/16",
              "2022/07/17",
              "2022/07/18",
              "2022/07/19",
              "2022/07/20",
              "2022/07/21",
              "2022/07/22",
              "2022/07/23",
              "2022/07/24",
              "2022/07/25",
              "2022/07/26",
              "2022/07/27",
              "2022/07/28",
              "2022/07/29",
              "2022/07/30",
              "2022/07/31",
              "2022/08/01",
              "2022/08/02",
              "2022/08/03",
              "2022/08/04",
              "2022/08/05",
              "2022/08/06",
              "2022/08/07",
              "2022/08/08",
              "2022/08/09",
              "2022/08/10",
              "2022/08/11",
              "2022/08/12",
              "2022/08/13",
              "2022/08/14",
              "2022/08/15",
              "2022/08/16",
              "2022/08/17",
              "2022/08/18",
              "2022/08/19",
              "2022/08/20",
              "2022/08/21",
              "2022/08/22",
              "2022/08/23",
              "2022/08/24",
              "2022/08/25",
              "2022/08/26",
              "2022/08/27",
              "2022/08/28",
              "2022/08/29",
              "2022/08/30",
              "2022/08/31",
              "2022/09/01",
              "2022/09/02",
              "2022/09/03",
              "2022/09/04",
              "2022/09/05",
              "2022/09/06",
              "2022/09/07",
              "2022/09/08",
              "2022/09/09",
              "2022/09/10",
              "2022/09/11",
              "2022/09/12",
              "2022/09/13",
              "2022/09/14",
              "2022/09/15",
              "2022/09/16",
              "2022/09/17",
              "2022/09/18",
              "2022/09/19",
              "2022/09/20",
              "2022/09/21",
              "2022/09/22",
              "2022/09/23",
              "2022/09/24",
              "2022/09/25",
              "2022/09/26",
              "2022/09/27",
              "2022/09/28",
              "2022/09/29",
              "2022/09/30",
              "2022/10/01",
              "2022/10/02",
              "2022/10/03",
              "2022/10/04",
              "2022/10/05",
              "2022/10/06",
              "2022/10/07",
              "2022/10/08",
              "2022/10/09",
              "2022/10/10",
              "2022/10/11",
              "2022/10/12",
              "2022/10/13",
              "2022/10/14",
              "2022/10/15",
              "2022/10/16",
              "2022/10/17",
              "2022/10/18",
              "2022/10/19",
              "2022/10/20",
              "2022/10/21",
              "2022/10/22",
              "2022/10/23",
              "2022/10/24",
              "2022/10/25",
              "2022/10/26",
              "2022/10/27",
              "2022/10/28",
              "2022/10/29",
              "2022/10/30",
              "2022/11/01",
              "2022/11/02",
              "2022/11/03",
              "2022/11/04",
              "2022/11/05",
              "2022/11/06",
              "2022/11/07",
              "2022/11/08",
              "2022/11/09",
              "2022/11/10",
              "2022/11/11",
              "2022/11/12",
              "2022/11/13",
              "2022/11/14",
              "2022/11/15",
              "2022/11/16",
              "2022/11/17",
              "2022/11/18",
              "2022/11/19",
              "2022/11/20",
              "2022/11/21",
              "2022/11/22",
              "2022/11/23",
              "2022/11/24",
              "2022/11/25",
              "2022/11/26",
              "2022/11/27",
              "2022/11/28",
              "2022/11/29",
              "2022/11/30",
              "2022/12/01",
              "2022/12/02",
              "2022/12/03",
              "2022/12/04",
              "2022/12/05",
              "2022/12/06",
              "2022/12/07",
              "2022/12/08",
              "2022/12/09",
              "2022/12/10",
              "2022/12/11",
              "2022/12/12",
              "2022/12/13",
              "2022/12/14",
              "2022/12/15",
              "2022/12/16",
              "2022/12/17",
              "2022/12/18",
              "2022/12/19",
              "2022/12/20",
              "2022/12/21",
              "2022/12/22",
              "2022/12/23",
              "2022/12/24",
              "2022/12/25",
              "2022/12/26",
              "2022/12/27",
              "2022/12/28",
              "2022/12/29",
              "2022/12/30",
              "2022/12/31",
              "2023/01/01",
              "2023/01/02",
              "2023/01/03",
              "2023/01/04",
              "2023/01/05",
              "2023/01/06",
              "2023/01/07",
              "2023/01/08",
              "2023/01/09",
              "2023/01/10",
              "2023/01/11",
              "2023/01/12",
              "2023/01/13",
              "2023/01/14",
              "2023/01/15",
              "2023/01/16",
              "2023/01/17",
              "2023/01/18",
              "2023/01/19",
              "2023/01/20",
              "2023/01/21",
              "2023/01/22",
              "2023/01/23",
              "2023/01/24",
              "2023/01/25",
              "2023/01/26",
              "2023/01/27",
              "2023/01/28",
              "2023/01/29",
              "2023/01/30",
              "2023/01/31",
            ],
          },
          yAxis: {},
          // toolbox: {
          //   right: 10,
          //   feature: {
          //     dataZoom: {
          //       yAxisIndex: "none",
          //     },
          //     restore: {},
          //     saveAsImage: {},
          //   },
          // },
          dataZoom: [
            {
              startValue: "2022-07-01",

              type: "slider",

              zoomLock: true,
              start: "30",
              end: "70",
            },
          ],
          visualMap: {
            textStyle: {
              color: "#ffffff",
            },
            top: "30%",
            right: 12,
            contentColor: "#5793f3",
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#A6DAFF",
              },
              {
                gt: 50,
                lte: 100,
                color: "#76B7DA",
              },
              {
                gt: 100,
                lte: 150,
                color: "#5696CC",
              },
              {
                gt: 150,
                lte: 200,
                color: "#0077BE",
              },
              {
                gt: 200,
                lte: 300,
                color: "#884EA0",
              },
              {
                gt: 300,
                color: "#CD6565",
              },
            ],
            outOfRange: {
              color: "#999",
            },
          },
          series: {
            name: "质量得分变化方差",
            type: "line",
            data: [
              234, 92, 49, 394, 332, 194, 42, 324, 360, 100, 334, 354, 181, 291,
              128, 189, 266, 306, 219, 91, 222, 25, 280, 125, 339, 294, 50, 141,
              198, 120, 227, 181, 263, 295, 242, 309, 173, 200, 34, 333, 367,
              361, 27, 265, 225, 214, 143, 13, 28, 90, 325, 335, 311, 29, 380,
              353, 371, 150, 226, 140, 177, 154, 328, 137, 116, 57, 360, 104,
              161, 351, 141, 104, 50, 26, 287, 125, 230, 7, 135, 281, 236, 233,
              332, 79, 342, 275, 378, 338, 393, 4, 227, 165, 137, 375, 300, 380,
              226, 389, 26, 159, 143, 320, 153, 106, 333, 146, 222, 93, 163, 60,
              184, 142, 357, 262, 191, 355, 113, 399, 320, 66, 15, 47, 400, 55,
              47, 381, 114, 246, 118, 75, 212, 170, 146, 122, 384, 41, 172, 156,
              144, 92, 370, 317, 6, 275, 365, 214, 307, 333, 21, 349, 370, 313,
              236, 210, 190, 270, 82, 91, 227, 365, 140, 313, 365, 23, 91, 55,
              200, 46, 356, 251, 125, 155, 53, 203, 172, 146, 72, 156, 155, 78,
              380, 201, 172, 165, 57, 131, 253, 218, 81, 231, 399, 239, 386,
              326, 172, 330, 239, 253, 264, 396, 256, 374, 355, 276, 397, 277,
              163, 101, 145, 327, 157, 90, 386, 274,
            ],
            label: {
              show: false,
              //color:"#fff"
            },
            // markLine: {
            //   silent: true,
            //   lineStyle: {
            //     color: "#333",
            //   },
            //   //label:{ color:"#fff" },
            //   data: [
            //     {
            //       yAxis: 50,
            //     },
            //     {
            //       yAxis: 100,
            //     },
            //     {
            //       yAxis: 150,
            //     },
            //     {
            //       yAxis: 200,
            //     },
            //     {
            //       yAxis: 300,
            //     },
            //   ],
            // },
          },
        };

        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options);
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return () => {
      const height = "300px";
      const width = "650px";

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
