<template>
  <div class="geo3Right1">
    <div>
      <div class="d-flex pt-2 pl-2">
        <!--        <span>-->
        <!--          <i class="iconfont icon-chart-area" />-->
        <!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">服务器详情</span>
        </div>
      </div>
      <div>
        <el-table :data="tableData" height="280" style="width: 100%">
          <el-table-column prop="name" label="指标项" width="300" />
          <el-table-column prop="address" label="内容" width="320" />
         
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    
    name: "操作系统",
    address: "Linux",
  },
  {
    
    name: "架构",
    address: "AMD64",
  },
  {
    
    name: "核心数",
    address: "4",
  },
  {
    
    name: "线程数",
    address: "8",
  },
  {
    
    name: "文件系统",
    address: "NTFS",
  },
  {
    
    name: "硬盘总量",
    address: "4TB",
  },
  {
    
    name: "内存总量",
    address: "1TB",
  },{
    
    name: "虚拟机可申请最大内存",
    address: "512GB",
  },{
    
    name: "JAVA版本",
    address: "1.7",
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
  .el-table tr,
  .el-table td {
    background-color: transparent;
    color: white;
    font-size: 20px;
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
