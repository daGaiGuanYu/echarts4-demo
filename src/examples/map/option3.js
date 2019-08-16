export default {
  typeName: '地图',
  name: '辽宁省地图',
  desc: `(需要 <b>import 'echarts/map/js/province/liaoning.js'</b>)`,
  size: 'bg',
  option: {
    geo: {
      map: '辽宁' // 画哪里的地图就写哪里的拼音名字，地图数据在 echarts 的 github 仓库里找，直接引入不需要任何额外操作
    }
  }
}