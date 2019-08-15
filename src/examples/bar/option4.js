export default {
  typeName: '柱形图',
  name: '多条柱子',
  option: {
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },{
      type: 'bar',
      data: [10, 22, 3, 10, 18, 22]
    }]
  }
}
