<template>
  <div class="test">
    <h2>Button</h2>
    <s-demo>
      <s-input type="button" text="hello"></s-input>
      <s-input type="button">hi</s-input>
    </s-demo>
    <h2>Input - text</h2>
    <s-demo>
      <s-input v-model="input1" tabindex="1" />
      <s-input v-model="input1" clearable/>
      <s-input v-model="input1" disabled />
      <br><br>
      <s-input type="password" v-model="input1" show-password/>
      <s-input type="password" v-model="input1" show-password clearable/>
      <br><br>
      <s-input type="textarea" v-model="input1"></s-input>
      <br><br>
      属性方式：
      <s-input suffix-icon="el-icon-date" placeholder="请选择日期" v-model="input1"></s-input>
      <s-input prefix-icon="el-icon-search" placeholder="请输入内容" v-model="input1"></s-input>
      <br><br>
      slot 方式：
      <s-input
        placeholder="请选择日期"
        v-model="input1">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </s-input>
      <s-input
        placeholder="请输入内容"
        v-model="input1">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </s-input>
      <br><br>
      <s-input type="textarea" v-model="input1" autosize></s-input>
      <br><br>
      <s-input type="textarea" v-model="input1" :autosize="{ minRows: 2, maxRows: 4}"></s-input>
      <br><br>
      <div>
        <s-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">Http://</template>
        </s-input>
      </div>
      <div style="margin-top: 15px;">
        <s-input placeholder="请输入内容" v-model="input1">
          <template slot="append">.com</template>
        </s-input>
      </div>
      <div style="margin-top: 15px;">
        <s-input placeholder="请输入内容" v-model="input1" class="input-with-select">
          <s-input type="select" slot="prepend" v-model="select" :options="options" placeholder="请选择"></s-input>
          <s-input type="button" slot="append" icon="el-icon-search"></s-input>
        </s-input>
      </div>
    </s-demo>
    <h2>Input - Number</h2>
    <s-demo>
      <s-input type="number" v-model="number1" :max="5" :min="-1" /> 
      <s-input type="number" v-model="number2" disabled />
      <s-input type="number" v-model="number3" :step="2" />
      <br><br>
      <s-input type="number" v-model="number4" :step="2" step-strictly />
      <s-input type="number" v-model="number5" :precision="2" :step="0.1" :max="10" />
      <s-input type="number" v-model="number6" :step="2" controls-position="right"/>
    </s-demo>
    <h2>Select</h2>
    <s-demo>
      <s-input
        class="hi"
        type="select"
        v-model="select1"
        :options="options"
        placeholder="hi"
        @change="onChangeSelect"
        @blur="onBlurSelect"
      />
      <s-input
        class="hi"
        type="select"
        v-model="select2"
        :options="options"
        placeholder="hi"
        @change="onChangeSelect"
        @blur="onBlurSelect"
        multiple
      />
      <br>
      <br>
      <s-input
        class="hi"
        type="select"
        v-model="select3"
        :options="options"
        placeholder="hi"
        clearable
      />
    </s-demo>
    <h2>Cascader</h2>
    <s-demo>
      <s-input
        type="cascader"
        v-model="cascader1"
        :options="cascaderOptions"
        clearable
        @change="onChangeCascader"
      />
      <s-input
        type="cascader"
        v-model="cascader1"
        :options="cascaderOptions"
        disabled
      />
      <br> <br>
      <s-input
        type="cascader"
        v-model="cascader2"
        :props="{ multiple: true }"
        :options="cascaderOptions2"
        collapse-tags
        clearable
      />
      <s-input type="cascader" :props="cascaderProps" />
    </s-demo>
    <h2>Radio</h2>
    <s-demo>
      <s-input
        type="radio"
        v-model="radio"
        :options="options"
        @change="onChangeRadio"
      />
      <p>{{ radio }}</p>
    </s-demo>
    <h2>Checkbox</h2>
    <s-demo>
      <s-input
        type="checkbox"
        v-model="checkbox"
        :options="options"
        @change="onChangeCheckbox"
      />
      <p>{{ checkbox }}</p>
    </s-demo>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Input as ElInput } from 'element-ui'

const options = [
  { label: '选项一', value: 0 },
  { label: '选项二', value: 1 },
  { label: '选项三', value: 2, disabled: true },
  { label: '选项四', value: 3 },
]

// Input
const input1 = ref(null)

// Input Number
const number1 = ref(0)
const number2 = ref(0)
const number3 = ref(0)
const number4 = ref(0)
const number5 = ref(1)
const number6 = ref(1)

// Button

// Select
const select = ref(null)
const select1 = ref(null)
const select2 = ref(null)
const select3 = ref(null)

function onChangeSelect(value) {
  // console.log('change - select')
  // console.log(value)
}

function onBlurSelect(event) {
  // console.log('blur - select')
  // console.log(event)
}

// cascader
const cascader1 = ref([])
const cascader2 = ref([])

const cascaderOptions = ref([{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则',
    children: [{
      value: 'yizhi',
      label: '一致'
    }, {
      value: 'fankui',
      label: '反馈'
    }, {
      value: 'xiaolv',
      label: '效率'
    }, {
      value: 'kekong',
      label: '可控'
    }]
  }, {
    value: 'daohang',
    label: '导航',
    children: [{
      value: 'cexiangdaohang',
      label: '侧向导航'
    }, {
      value: 'dingbudaohang',
      label: '顶部导航'
    }]
  }]
}, {
  value: 'zujian',
  label: '组件',
  children: [{
    value: 'basic',
    label: 'Basic',
    children: [{
      value: 'layout',
      label: 'Layout 布局'
    }, {
      value: 'color',
      label: 'Color 色彩'
    }, {
      value: 'typography',
      label: 'Typography 字体'
    }, {
      value: 'icon',
      label: 'Icon 图标'
    }, {
      value: 'button',
      label: 'Button 按钮'
    }]
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio 单选框'
    }, {
      value: 'checkbox',
      label: 'Checkbox 多选框'
    }, {
      value: 'input',
      label: 'Input 输入框'
    }, {
      value: 'input-number',
      label: 'InputNumber 计数器'
    }, {
      value: 'select',
      label: 'Select 选择器'
    }, {
      value: 'cascader',
      label: 'Cascader 级联选择器'
    }, {
      value: 'switch',
      label: 'Switch 开关'
    }, {
      value: 'slider',
      label: 'Slider 滑块'
    }, {
      value: 'time-picker',
      label: 'TimePicker 时间选择器'
    }, {
      value: 'date-picker',
      label: 'DatePicker 日期选择器'
    }, {
      value: 'datetime-picker',
      label: 'DateTimePicker 日期时间选择器'
    }, {
      value: 'upload',
      label: 'Upload 上传'
    }, {
      value: 'rate',
      label: 'Rate 评分'
    }, {
      value: 'form',
      label: 'Form 表单'
    }]
  }, {
    value: 'data',
    label: 'Data',
    children: [{
      value: 'table',
      label: 'Table 表格'
    }, {
      value: 'tag',
      label: 'Tag 标签'
    }, {
      value: 'progress',
      label: 'Progress 进度条'
    }, {
      value: 'tree',
      label: 'Tree 树形控件'
    }, {
      value: 'pagination',
      label: 'Pagination 分页'
    }, {
      value: 'badge',
      label: 'Badge 标记'
    }]
  }, {
    value: 'notice',
    label: 'Notice',
    children: [{
      value: 'alert',
      label: 'Alert 警告'
    }, {
      value: 'loading',
      label: 'Loading 加载'
    }, {
      value: 'message',
      label: 'Message 消息提示'
    }, {
      value: 'message-box',
      label: 'MessageBox 弹框'
    }, {
      value: 'notification',
      label: 'Notification 通知'
    }]
  }, {
    value: 'navigation',
    label: 'Navigation',
    children: [{
      value: 'menu',
      label: 'NavMenu 导航菜单'
    }, {
      value: 'tabs',
      label: 'Tabs 标签页'
    }, {
      value: 'breadcrumb',
      label: 'Breadcrumb 面包屑'
    }, {
      value: 'dropdown',
      label: 'Dropdown 下拉菜单'
    }, {
      value: 'steps',
      label: 'Steps 步骤条'
    }]
  }, {
    value: 'others',
    label: 'Others',
    children: [{
      value: 'dialog',
      label: 'Dialog 对话框'
    }, {
      value: 'tooltip',
      label: 'Tooltip 文字提示'
    }, {
      value: 'popover',
      label: 'Popover 弹出框'
    }, {
      value: 'card',
      label: 'Card 卡片'
    }, {
      value: 'carousel',
      label: 'Carousel 走马灯'
    }, {
      value: 'collapse',
      label: 'Collapse 折叠面板'
    }]
  }]
}, {
  value: 'ziyuan',
  label: '资源',
  children: [{
    value: 'axure',
    label: 'Axure Components'
  }, {
    value: 'sketch',
    label: 'Sketch Templates'
  }, {
    value: 'jiaohu',
    label: '组件交互文档'
  }]
}])

const cascaderOptions2 = [{
  value: 1,
  label: '东南',
  children: [{
    value: 2,
    label: '上海',
    children: [
      { value: 3, label: '普陀' },
      { value: 4, label: '黄埔' },
      { value: 5, label: '徐汇' }
    ]
  }, {
    value: 7,
    label: '江苏',
    children: [
      { value: 8, label: '南京' },
      { value: 9, label: '苏州' },
      { value: 10, label: '无锡' }
    ]
  }, {
    value: 12,
    label: '浙江',
    children: [
      { value: 13, label: '杭州' },
      { value: 14, label: '宁波' },
      { value: 15, label: '嘉兴' }
    ]
  }]
}, {
  value: 17,
  label: '西北',
  children: [{
    value: 18,
    label: '陕西',
    children: [
      { value: 19, label: '西安' },
      { value: 20, label: '延安' }
    ]
  }, {
    value: 21,
    label: '新疆维吾尔族自治区',
    children: [
      { value: 22, label: '乌鲁木齐' },
      { value: 23, label: '克拉玛依' }
    ]
  }]
}]

let id = 0;

const cascaderProps = {
  lazy: true,
  lazyLoad (node, resolve) {
    const { level } = node;
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 })
        .map(item => ({
          value: ++id,
          label: `选项${id}`,
          leaf: level >= 2
        }));
      // 通过调用resolve将子节点数据返回，通知组件数据加载完成
      resolve(nodes);
    }, 1000);
  }
}

function onChangeCascader(value) {
  console.log('onChangeCascader')
  console.log(value);
}

// Radio
const radio = ref(0)

function onChangeRadio(value) {
  // console.log('change - radio')
  // console.log(value)
}

// Checkbox
const checkbox =ref([])

function onChangeCheckbox(value) {
  console.log('checkbox - value')
  console.log(value)
}
</script>

<style lang="scss">
.test {
  .el-input {
    margin-right: 1em;
  }
  .el-select .el-input {
    width: 240px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-input-group {
    width: 640px;
  }
  .el-input-number {
    margin-right: 1em;
  }
  .el-cascader .el-input {
    width: 240px;
  }
}
</style>