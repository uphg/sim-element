import { h } from "vue"
import { Table as ElTable, TableColumn as ElTableColumn } from "element-ui"

export default {
  name: 'STable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
  },
  setup(props, context) {

    return () => h(ElTable, {
      props: {
        data: props.data
      }
    }, props.columns.map(item => h(ElTableColumn, {
        props: {
          prop: item.prop,
          label: item.label,
          width: item.width
        }
      }))
    )
  }
}
