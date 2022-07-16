<template>
  <div class="test-datetime">
    <h1>DateTimePicker 日期时间选择器</h1>
    <s-block title="日期和时间点" :demo-style="{ display: 'flex' }">
      <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          v-model="datetime1"
          type="datetime"
          placeholder="选择日期时间">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          v-model="datetime2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :picker-options="pickerOptionsDatetime">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">设置默认时间</span>
        <s-input
          v-model="datetime3"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00">
        </s-input>
      </div>
    </s-block>
    <s-block title="日期和时间范围">
      <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          v-model="scope1"
          type="datetime"
          date-type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          v-model="scope2"
          type="datetime"
          date-type="datetimerange"
          :picker-options="pickerOptionsScope"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </s-input>
      </div>
    </s-block>
    <s-block title="默认的起始与结束时刻">
      <div class="block">
        <span class="demonstration">起始日期时刻为 12:00:00</span>
        <s-input
          v-model="defaultDate1"
          type="datetime"
          date-type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']">
        </s-input>
      </div>
      <div class="block">
        <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
        <s-input
          v-model="defaultDate2"
          type="datetime"
          date-type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00', '08:00:00']">
        </s-input>
      </div>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pickerOptionsDatetime = {
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
}
const datetime1 = ref('')
const datetime2 = ref('')
const datetime3 = ref('')

const pickerOptionsScope = {
  shortcuts: [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      picker.$emit('pick', [start, end]);
    }
  }]
}

const scope1 = ref('')
const scope2 = ref('')

const defaultDate1 = ref('')
const defaultDate2 = ref('')
</script>

<style lang="scss">
.test-datetime {
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