export const fileds = [
  {
    key: 'username',
    label: '用户名',
    exclude: /[^\w]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入用户名`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'password',
    label: '密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'checkPassword',
    label: '确认密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'phone',
    label: '手机号',
    exclude: /^0|[^\d]/g,
    maxLength: 11,
    rules: [
      { required: true, message: `请输入手机号`, trigger: 'blur' },
      {
        required: true,
        pattern: /^1[3-9]\d{9}$/,
        message: '目前只支持中国大陆的手机号码',
        trigger: 'blur'
      }
    ]
  },
  {
    key: 'email',
    label: '邮箱',
    exclude: /[^a-zA-Z0-9@._-]/g,
    maxLength: 11,
    rules: [
      { required: false, message: `请输入邮箱`, trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ]
  },
  {
    key: 'captcha',
    label: '验证码',
    exclude: /[^\d]/g,
    maxLength: 6,
    rules: [
      { required: true, message: `请输入验证码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'captcha',
    label: '图片验证码',
    exclude: /[^a-zA-Z0-9]/g,
    maxLength: 4,
    rules: [
      { required: true, message: `请输入图片验证码`, trigger: 'blur' },
      { min: 4, message: `最小长度在 4 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'certificateType',
    label: '身份类型',
    rules: [
      { required: true, type: 'number', message: '请选择身份类型', trigger: ['change', 'blur'] }
    ]
  },
  {
    key: 'authStatus',
    label: '认证状态',
    rules: [
      { required: true, type: 'number', message: '请选择数字类型认证状态', trigger: ['change', 'blur'] }
    ]
  },
  {
    key: 'date',
    label: '日期',
    rules: [
      { required: true, message: '请选择日期', trigger: ['change', 'blur'] }
    ]
  }
]
