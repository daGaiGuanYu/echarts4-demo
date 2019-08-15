<template>
  <div class="app">
    <div class="header">
      <div class="title">echarts4 demo</div>
      <div class="right">
        <a href="https://github.com/daGaiGuanYu/echarts4-demo">github</a>
      </div>
    </div>
  </div>
</template>
<script>
import all from '../examples/index.js';

export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped lang="sass">
@import '../style/sass.sass'

.header
  +space-between
  border-bottom: $border

.title
  padding: 10px 20px
  font-weight: bold

.right
  margin-right: 20px

</style>
