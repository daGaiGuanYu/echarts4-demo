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
          <div class="title" :id="type[0].typeName">{{type[0].typeName}}</div>
          <div class="charts">
            <div class="chart" v-for="chart in type" :id="chart.name">{{chart.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import all from '../examples/index.js';
import echarts from 'echarts';

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
