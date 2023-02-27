<template>
  <div class="geo3Right1">
    <div>
      <div class="d-flex pt-2 pl-2">
        <!--        <span>-->
        <!--          <i class="iconfont icon-chart-area" />-->
        <!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">服务详细信息</span>
        </div>
      </div>
      <div>
        <el-table :data="tableData" height="250" style="width: 100%">
          <el-table-column prop="name" label="指标项" width="150" />
          <el-table-column prop="address" label="内容" width="270" />
          <el-table-column prop="date" label="时间戳" width="180" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2023-01-03",
    name: "服务名称",
    address: "National LandCover Database",
  },
  {
    date: "2023-01-03",
    name: "服务关键词",
    address: "地理学,土地覆盖,激光点云,山东烟台,空间数据",
  },
  {
    date: "2023-01-03",
    name: "服务类型",
    address: "网络地图服务(WMS)",
  },
  {
    date: "2023-01-03",
    name: "服务提供者",
    address: "中国GEOSS",
  },
  {
    date: "2023-01-03",
    name: "服务联系方式",
    address: "AdamAlex89@gmail.com",
  },
  {
    date: "2023-01-03",
    name: "服务响应率",
    address: "83.2%",
  },
  {
    date: "2023-01-03",
    name: "空间覆盖范围",
    address: "全国",
  },
];
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo3Right1 {
  //padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  position: relative;
  left: 10px;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: bisque;
    font-size: 20px;
  }

  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    color: white;
  }
  .el-table th,
  .el-table tr {
    background-color: transparent;
    color: white;
  }
  .el-table__body tr:hover > td {
    background-color: rgb(75, 92, 164) !important;
  }

  .el-table thead {
    color: #ffffff;
    font-weight: 500;
  }
  .el-table ::before {
    height: 0px;
  }
}
</style>
