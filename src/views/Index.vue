<template>
  <div>
    <v-header></v-header>
    <el-button type="primary">主要按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
export default {
  components:{
    'v-header':Header
  },
  name: 'Home',
}
</script>
