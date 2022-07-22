const selectTips = ['select', 'checkbox', 'radio', 'switch', 'date', 'year', 'month', 'dates', 'week', 'daterange', 'monthrange', 'datetime', 'datetimerange']

function errorFormat({ type, label, key }) {
  let prefix
  if (selectTips.includes(type)) {
    prefix = '请选择'
  } else if (['file', 'upload'].includes(type)) {
    prefix = '请上传'
  } else {
    prefix = '请输入'
  }
  return [
    { required: true, message: prefix + label, trigger: 'blur' }
  ]
}

export default errorFormat