<template>
  <div class="test-table">
    <h2>基础用法</h2>
    <s-block>
      <s-table :data="data" :columns="columns " />
    </s-block>
    <h2>自定义作用域插槽 & 固定列</h2>
    <s-block>
      <s-table :data="data" :columns="columns2" stripe />
    </s-block>
    <h2>选项操作</h2>
    <s-block>
      <s-table :data="data" :columns="columns3 " />
    </s-block>
  </div>
</template>

<script setup>
import { h } from 'vue';

const data = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄',
  amount: '100',
  order: 0
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄',
  amount: '100',
  order: 1
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄',
  amount: '100',
  order: 2
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄',
  amount: '100',
  order: 3
}, {
  date: '2016-05-06',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄',
  amount: '100',
  order: 9
}]

const columns = [
  {
    prop: 'date',
    label: '日期',
    width: '120'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '120'
  },
  {
    prop: 'address',
    label: '地址',
  }
]

const orderOptions = [
  { label: '黄金糕', value: 0 },
  { label: '双皮奶', value: 1 },
  { label: '龙须面', value: 2 },
  { label: '炸酱面', value: 3 },
  { label: '北京烤鸭', value: 4 },
]

const columns2 = [
  {
    prop: 'date',
    label: '日期',
    width: '120',
    fixed: true,
  },
  {
    prop: 'name',
    label: '姓名',
    width: '120'
  },
  {
    prop: 'address',
    label: '地址',
    width: '300',
    showOverflowTooltip: true,
  },
  {
    prop: 'order',
    label: '订单',
    width: '100',
    options: orderOptions,
    emptyText: '---'
  },
  {
    label: '金额',
    width: '100',
    fixed: 'right',
    scopedSlots: {
      default: (scope) => h('span', null, [`\$${scope.row?.amount}`])
    }
  }
]

const columns3 = [
  ...columns,
  {
    label: '操作',
    width: '120',
    children: [
      {
        type: 'link',
        text: '编辑',
        onClick(row) {
          console.log('row')
          console.log(row)
        }
      },
      {
        type: 'button',
        hue: 'danger',
        text: '删除',
        size: 'mini',
        onClick(row) {
          console.log('row')
          console.log(row)
        }
      }
    ]
  }
]
</script>

<style lang="scss">
.el-link+.el-button {
  margin-left: 10px;
}
</style>