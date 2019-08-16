<template>
  <div class="app">
    <div class="header">
      <div class="title">echarts4 demo</div>
      <div class="right">
        <a href="https://github.com/daGaiGuanYu/echarts4-demo">github</a>
      </div>
    </div>
    <div class="body">
      <div class="menu">
        <a class="item" v-for="type in all" :href="'#'+type[0].typeName">{{type[0].typeName}}</a>
      </div>
      <div class="types">
        <div class="type" v-for="type in all">
          <h3 class="type-title" :id="type[0].typeName">{{type[0].typeName}}</h3>
          <div class="charts">
            <div class="chart-wrapper" v-for="chart in type">
              <div class="chart-title">{{chart.name}}</div>
              <div class="chart" :id="chart.name"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import all from '../examples/index.js';
import echarts from 'echarts';
import 'echarts/map/js/china.js' // 引入中国地图数据

export default {
  data(){
    return {
      all
    }
  },
  mounted(){
    Object.keys(this.all).forEach( typeKey => {
      this.all[typeKey].forEach( chart => {
        let domTarget = document.querySelector('#'+chart.name);
        echarts.init(domTarget).setOption(chart.option);
      })
    })
  }
}
</script>

<style scoped lang="sass" src="./index.sass"></style>
