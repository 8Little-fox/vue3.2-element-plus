<template>
  <div class="demo-collapse">
    <el-collapse
      v-model="activeName"
      accordion
      v-for="(item, index) of list"
      :key="index"
    >
      <el-collapse-item :title="item.title" :name="item.index">
        <div>
          {{ item.name }}
        </div>
        <div>
          {{ item.des }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('1')
const list = ref([
  {
    title: 'Consistency',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Feedback',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Efficiency',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Controllability',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Controllability',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Controllability',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Controllability',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
   {
    title: 'Consistency',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  },
  {
    title: 'Feedback',
    name: 'Consistent with real life: in line with the process and logic of reallife, and comply with languages and habits that the users are used to;',
    des: ' Consistent within interface: all elements should be consistent, suchas: design style, icons and texts, position of elements, etc.'
  }
])
</script>
