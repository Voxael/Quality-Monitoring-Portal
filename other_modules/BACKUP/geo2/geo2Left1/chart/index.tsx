import { defineComponent, onUnmounted, reactive } from 'vue'
import Draw from './draw'
import {  toRefs } from "@vue/reactivity";
export default defineComponent({
  components: {
    Draw,
  },
  props:
      {
        name:{
          type:String
        },
      },
  setup(props){
    // let intervalInstance = null

    const cdata = reactive({
        seriesData : null,
        indicator: null,
        legend: null
    })

    // console.log('_____',cdata.seriesData)
    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      )
    }
    },
})