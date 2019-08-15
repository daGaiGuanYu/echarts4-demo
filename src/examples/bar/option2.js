export default {
  typeName: '柱形图',
  name: '柱形图和条形图在一起',
  option: {
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },{
      type: 'line',
      data: [50, 20, 3, 12, 19, 29]
    }]
  }
}
