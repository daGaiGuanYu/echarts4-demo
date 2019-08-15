export default {
  typeName: '柱形图',
  name: '带tooltip的柱状图（把鼠标放柱子上）',
  option: {
    tooltip: {}, // 加上一个 tooltip 空对象，echarts 就会自动生成相应的 tooltip，大部分情况下，不需要手动修改里面的内容
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
}
