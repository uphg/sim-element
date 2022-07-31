import { VueConstructor } from 'vue';
import Table from './table'

(Table as any).install = function (Vue: VueConstructor) {
  Vue.component(Table.name, Table);
}

export default Table
