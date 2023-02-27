<template>
  <div class="geo5Bottom1">
    <div >
      <div class="d-flex pt-2 pl-2">
<!--        <span>-->
<!--          <i class="iconfont icon-chart-area" />-->
<!--        </span>-->
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">更多质量信息</span>
        </div>
      </div>
      <div>
        <el-table :data="tableData" height="250" style="width: 100%">
          <el-table-column prop="name" label="性能信息" width="210" />
          <el-table-column prop="address" label="内容" width="210" />
          <el-table-column prop="date" label="时间戳" width="210" />
          
          
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2023-01-03",
    name: "服务器类型",
    address: "FTP服务器",
  },
  {
    date: "2023-01-03",
    name: "服务器位置",
    address: "武汉",
  },
  {
    date: "2023-01-03",
    name: "系统类型",
    address: "Windows",
  },
  {
    date: "2023-01-03",
    name: "系统架构",
    address: "X86",
  },
  {
    date: "2023-01-03",
    name: "核心数",
    address: "4",
  },
  {
    date: "2023-01-03",
    name: "线程数",
    address: "8",
  },
  {
    date: "2023-01-03",
    name: "硬盘存储总量",
    address: "5468TB",
  },
  {
    date: "2023-01-03",
    name: "系统内存总量",
    address: "48TB",
  },{
    date: "2023-01-03",
    name: "虚拟机内存总量",
    address: "10TB",
  },
];
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 620px;
.geo5Bottom1 {
  //padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  position: relative;
  left:10px;

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
  color: #a750ff;
  font-weight: 500;
}

.el-table ::before {
    height: 0px;
  }
}
</style>
