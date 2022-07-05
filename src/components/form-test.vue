<template>
  <div style="padding-top: 65px; width: 460px; margin: 0 auto;">
    <h2>表单测试</h2>
    <t-form :model="form" with-validator with-enter-next>
      <t-form-item
        v-model="form.username"
        prop="username"
      />
      <t-form-item v-model="form.password" prop="password" type="password" />
      <t-form-item
        v-model="form.checkPassword"
        prop="checkPassword"
        type="password"
        eqField="password"
      />
      <t-form-item v-model="form.email" prop="email" />
      <t-form-item v-model="form.phone" prop="phone" />
      <t-form-item
        v-model="form.certificateType"
        prop="certificateType"
        placeholder="请选择身份类型"
        type="select"
        :options="[
          { label: '统一社会信用代码', value: 1 },
          { label: '其他', value: 2 },
          { label: 'xxx', value: 'a' },
        ]"
      />
      <t-form-item v-model="form.imgCaptcha" prop='imgCaptcha'>
      </t-form-item>
      <t-form-item
        v-model="form.authStatus"
        prop='authStatus'
        type='radio'
        :options="[
          { label: '未认证', value: 0 },
          { label: '认证中', value: 1, disabled: true  },
          { label: '已认证', value: 2 },
          { label: 'xxx', value: 'a' },
        ]"
      >
      </t-form-item>
      <t-form-item label="手机验证码" v-model="form.captcha" prop='imgCaptcha' />
      <t-form-item v-model="form.date" type="date-picker"></t-form-item>
      <t-form-item v-model="form.captcha" prop='captcha' />
      <t-form-item
        v-model="form.checkbox"
        type="checkbox"
        prop='checkbox'
        @change="onChangeCheckbox"
        :options="[
          { label: '北京', value: 0 },
          { label: '上海', value: 1 },
          { label: '广州', value: 2 },
          { label: '深圳', value: 3, disabled: true },
          { label: '杭州', value: 4 },
        ]"
      />
      <t-form-item v-model="form.captcha2" prop='captcha2' />
      <t-form-item
        v-model="form.number"
        type="input-number"
        @change="onChangeInputNumber"
      />
      <t-form-item v-model="form.text" type="textarea" />
      <t-form-item
        type="button"
        submit-text="提交"
        cancel-text="取消"
        @click-submit="onClickSubmit"
        @click-cancel="onClickCancel"
      >
        
      </t-form-item>
    </t-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: 'jack111',
        password: '111111',
        checkPassword: '111111',
        email: '',
        phone: 15631107986,
        certificateType: '',
        captcha:  '111111',
        checkbox: [],
        captcha2: '123123',
        authStatus: 1,
        imgCaptcha: '1111',
        number: '',
        date: '',
        text: '',
        input1: ''
      }
    }
  },
  methods: {
    onChangeCheckbox() {
      console.log('hi')
    },
    clickCountDown(done) {
      console.log('点击倒计时')
      done()
    },
    onClickSubmit() {
      console.log('点击 submit')
    },
    onClickCancel() {
      console.log('点击 cancel')
    },
    onChangeInputNumber() {
      console.log('hi2')
    }
  }
}
</script>