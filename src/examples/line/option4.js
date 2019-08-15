export default {
  typeName: '折线图',
  name: 'XY轴转换',
  option: {
    xAxis: {
      type: 'value' // x 轴的 type 默认为 category
    },
    yAxis: {
      type: 'category', // y 轴的 type 默认为 value
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    series: [{
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
}
