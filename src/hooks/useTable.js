import { reactive, onMounted, toRefs } from 'vue'
import request from '@/utils/request'

const useTable = (options) => {
  const state = reactive({
    dataSource: [],
    total: 0,
    loading: false,
    page: 1,
    size: 10,
    pagination: true
  })
  const getTable = () => {
    const params = {
      page: state.page - 1,
      size: state.size
    }
    request.get(options.api, params).then((res) => {
      console.log('res***', res)
      state.total = res.totalElements
      state.dataSource = res.content
    }).finally(() => { })
  }
  const search = reactive({
    searchForm: {},
    initForm: {}
  })
  onMounted(() => { getTable() })
  return {
    ...toRefs(state),
    search,
    getTable
  }
}
// 匹配值
const MAP_WIDTH = (username) => {
  username = 200
  return {
    username
  }
}
const createColumn = (dataIndex, label, config, width) => {
  // eslint-disable-next-line no-undef
  const args = Array.from(arguments)
  if (args.length === 2) {
    config = {}
    width = null
  }
  if (typeof config === 'number') {
    width = config
    config = {}
  }
  width = MAP_WIDTH[dataIndex] || width
  return {
    dataIndex,
    label,
    slots: typeof args.slice(-1)[0] === 'boolean',
    props: Object.assign({ width }, config)
  }
}
export {
  createColumn
}
export default useTable
