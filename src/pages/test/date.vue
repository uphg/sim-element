<template>
  <div class="test-date">
    <h1>DatePicker 日期选择器</h1>
    <s-block title="选择日" :demo-style="{ display: 'flex', 'flex-wrap': 'wrap' }">
      <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          type="date"
          v-model="date1"
          placeholder="选择日期"
        />
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          type="date"
          v-model="date2"
          align="right"
          placeholder="选择日期"
          :picker-options="datePickerOptions"
        />
      </div>
    </s-block>
    <s-block title="其他日期单位" :demo-style="{ display: 'flex', 'flex-wrap': 'wrap' }">
      <div class="container"> 
        <div class="block">
          <span class="demonstration">周</span>
          <s-input
            v-model="other1"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周">
          </s-input>
        </div>
        <div class="block">
          <span class="demonstration">月</span>
          <s-input
            v-model="other2"
            type="month"
            placeholder="选择月">
          </s-input>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">年</span>
          <s-input
            v-model="other3"
            type="year"
            placeholder="选择年">
          </s-input>
        </div>
        <div class="block">
          <span class="demonstration">多个日期</span>
          <s-input
            type="dates"
            v-model="other4"
            placeholder="选择一个或多个日期">
          </s-input>
        </div>
      </div>
    </s-block>
    <s-block title="选择日期范围">
       <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          v-model="scope1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          v-model="scope2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </s-input>
      </div>
    </s-block>
    <s-block title="选择月份范围">
      <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          v-model="month1"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          v-model="month2"
          type="monthrange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          :picker-options="pickerOptions">
        </s-input>
      </div>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date1 = ref('')
const date2 = ref('')

const other1 = ref('')
const other2 = ref('')
const other3 = ref('')
const other4 = ref('')

const scope1 = ref('')
const scope2 = ref('')


const month1 = ref('')
const month2 = ref('')

const datePickerOptions = ref( {
  disabledDate(time) {
    return time.getTime() > Date.now();
  },
  shortcuts: [{
    text: '今天',
    onClick(picker) {
      picker.$emit('pick', new Date());
    }
  }, {
    text: '昨天',
    onClick(picker) {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      picker.$emit('pick', date);
    }
  }, {
    text: '一周前',
    onClick(picker) {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', date);
    }
  }]
})

const pickerOptions = {
  shortcuts: [{
    text: '本月',
    onClick(picker) {
      picker.$emit('pick', [new Date(), new Date()]);
    }
  }, {
    text: '今年至今',
    onClick(picker) {
      const end = new Date();
      const start = new Date(new Date().getFullYear(), 0);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近六个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setMonth(start.getMonth() - 6);
      picker.$emit('pick', [start, end]);
    }
  }]
}

</script>

<style lang="scss">
.test-date {
  .container {
    flex: 1;
  }
  .block {
    flex: 1;
    padding: 30px 0;
    text-align: center;
    .demonstration {
      display: block;
      color: #8492a6;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>