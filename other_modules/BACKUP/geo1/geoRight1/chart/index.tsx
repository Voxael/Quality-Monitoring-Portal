import { defineComponent, onUnmounted, reactive } from 'vue'
import Draw from './draw'
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
      const cdata = reactive({
          data: 50
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