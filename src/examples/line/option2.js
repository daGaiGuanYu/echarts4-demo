export default {
  typeName: '折线图',
  name: '平滑折线图',
  option: {
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      type: 'line',
      smooth: true,
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
}
