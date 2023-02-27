<template>
  <div class="lists">
    <div>
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span class="fs-xl text mx-2 mt-1">检测历史</span>
        </div>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          :default-sort="{ prop: 'cpu', order: 'descending' }"
          height="280"
          style="width: 100%"
        >
          <el-table-column prop="host" label="服务器" width="260">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-icon><Platform /></el-icon>
                <span style="margin-left: 10px">{{ scope.row.host }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="cpu" label="CPU占用" sortable width="200">
            <template #default="scope">
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="25"
                  :percentage="scope.row.cpu"
                />
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="memory" label="系统内存" sortable width="200">
            <template #default="scope">
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="25"
                  :percentage="scope.row.memory"
                  :format="format(scope.row.memory)"
                />
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="disk" label="硬盘容量" sortable width="200">
            <template #default="scope">
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="25"
                  :percentage="scope.row.disk"
                  :format="format(scope.row.disk)"
                />
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="jvm" label="虚拟机内存" sortable width="200">
            <template #default="scope">
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="25"
                  :percentage="scope.row.jvm"
                  :format="format(scope.row.jvm)"
                />
              </div>
            </template>
          </el-table-column>

          <el-table-column
            prop="loc"
            label="位置"
            width="200"
            column-key="loc"
            :filters="[
              {
                text: '武汉',
                value: '武汉',
              },
              {
                text: '北京',
                value: '北京',
              },
            ]"
            :filter-method="filterHandler"
          >
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-icon><LocationFilled /></el-icon>
                <span style="margin-left: 10px">{{ scope.row.loc }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable, TableColumnCtx } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const filterHandler = (
  value: string,
  row: User,
  column: TableColumnCtx<User>
) => {
  const property = column['property']
  return row[property] === value
}
const format = (row) => {
      return () => {
        
          return row + 'GB'
          
      }
    }
const tableData = [
  {
    host:'logs-es-data11.us.geodatabase',
    cpu:32.9,
    memory:37.5,
    disk:19.9,
    jvm:10.2,
    loc:'武汉',
  },
  {
    host:'ip-10-1-230',
    cpu:32.5,
    memory:54.2,
    disk:20.8,
    jvm:3.2,
    loc:'北京',
  },
  {
    host:'tsf-data34.us.sematic-data',
    cpu:29.7,
    memory:33.5,
    disk:79.9,
    jvm:10.2,
    loc:'武汉',
  },
  {
    host:'china-geoss-client-entry',
    cpu:21.9,
    memory:26.6,
    disk:87.1,
    jvm:31.3,
    loc:'北京',
  },
  {
    host:'china-geoss-client-entry-2',
    cpu:24.0,
    memory:10.7,
    disk:19.8,
    jvm:37.6,
    loc:'北京',
  },
  {
    host:'ip-10-1-1-28',
    cpu:22.1,
    memory:11,
    disk:25.4,
    jvm:38.2,
    loc:'武汉',
  },
  
];
</script>

<style lang="scss" class>
$box-height: 300px;
$box-width: 1250px;
.lists {
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

  .el-progress-bar__outer {
  background-color: #2776c4;
  }
  .el-progress-bar__outer {
  background-color: #1a4978;
  }

}
</style>
