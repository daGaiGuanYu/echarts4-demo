export default {
  typeName: '折线图',
  name: '双折线图',
  option: {
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    },{
      type: 'line',
      smooth: true,
      data: [1, 2, 6, 18, 30, 20]
    }]
  }
}
