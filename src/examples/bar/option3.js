export default {
  typeName: '柱形图',
  name: '细的柱形图',
  option: {
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      barWidth: 20
    }]
  }
}
