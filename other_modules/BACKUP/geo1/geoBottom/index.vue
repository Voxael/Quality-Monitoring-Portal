<template>
  <div class="geoBottom">
    <div class="bg-color-black">
      <div class="d-flex mt-1 jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const config = reactive({
      header: [' ID', '名称', '类型', '错误类型', '     持续时间'],
      data: [
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorGrass'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorRed'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorGrass'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorRed'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorGrass'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorRed'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorGrass'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorRed'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
        ['001', 'Webservice-energy CSW Catalogue', "<span  class='colorGrass'>CSW</span>", "Not Found", "2022/10/01-2022/10/02"],
      ],
      rowNum: 4, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      index: true,
      columnWidth: [200,200,300,200,200,200],
      align: ['center']
    })
    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 200px;
$box-width: 1480px;
.geoBottom {
  padding: 10px;
  //padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 1500px;
      height: 170px;
    }
  }
}
</style>
