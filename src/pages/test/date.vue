<template>
  <div class="test-date">
    <s-block title="选择日">
      <div class="block">
        <span class="demonstration">默认</span>
        <s-input
          v-model="date1"
          type="date"
          placeholder="选择日期"
        />
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <s-input
          v-model="date2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="datePickerOptions"
        />
      </div>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date1 = ref('')
const date2 = ref('')
const date3 = ref('')
const date4 = ref('')
const date5 = ref('')

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

</script>
