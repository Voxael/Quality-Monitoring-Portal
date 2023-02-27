<template>
  <div class="assss">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">资源详情</span>
        </div>
      </div>
      <div>
        <el-table :data="tableData" height="250" style="width: 100%">
          <el-table-column prop="name" label="指标项" width="180" />
          <el-table-column prop="address" label="内容" width="270" />
         
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    
    name: "资源名称",
    address: "2018年5月山东寿光10米洪水受淹耕地数据集",
  },
  {
    
    name: "资源关键词",
    address: "耕地,淹没范围,寿光洪水",
  },
  {
    
    name: "数据量大小",
    address: "921.6bytes",
  },
  {
    
    name: "资源提供者",
    address: "北京师范大学",
  },
  {
    
    name: "服务联系方式",
    address: "jjwu@bnu.edu.cn",
  },
  {
    
    name: "平均响应率",
    address: "83.2%",
  },
  
];
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 450px;
.assss {
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
    font-weight: 200;
  }
  .el-table ::before {
    height: 0px;
  }
}
</style>
