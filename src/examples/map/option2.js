export default {
  typeName: '地图',
  name: '缩放，鼠标滚轮滚一滚',
  desc: `(需要 <b>import 'echarts/map/js/china.js'</b>)`,
  size: 'bg',
  option: {
    geo: {
      map: 'china',
      roam: true, // 开启拖动和缩放
      scaleLimit: { // 设置缩放比例的最值
        min: 0.5,
        max: 2
      }
    }
  }
}