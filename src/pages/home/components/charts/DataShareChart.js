import ReactCharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

// let now = +new Date(1997, 9, 3)
// let oneDay = 24 * 3600 * 1000
let now = +new Date()
let oneMinutes = 60 * 1000
let value = Math.random() * 1000

const randowData = (step = 1) => {
	now = new Date(+now + oneMinutes)
	value = value + Math.random() * 21 - 10
	return {
		name: now.toString(),
		value: [
			moment(now.getTime()).format('YYYY/MM/DD HH:mm:ss'),
			Math.round(value) + step * 2 * Math.random()
		]
	}
}
let data1 = []
let data2 = []
for (let i = 0; i < 1000; i++) {
	data1.push(randowData())
	data2.push(randowData(1024))
}
console.log('data1', data1)
const Index = ({
  data = [],
  getRef,
  chartName = '',
  style = {},
}) => {
  const getOption = () => {
    const option = {
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				data:['数据进入','数据对外共享'],
				textStyle: {
					color: '#26c9ff'
				},
      },
			xAxis: {
    	  type: 'time',
    	  splitLine: {
    	    show: false,
				},
				axisLine: {
					lineStyle: {
						color: '#156cb3',
					},
				},
				axisLabel: {
					color: '#436ca5',
				},
    	},
    	yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
				},
				axisLine: {
					lineStyle: {
						color: '#156cb3',
					},
				},
				axisLabel: {
					color: '#436ca5',
				},
			},
			series: [
				{
					name: '数据进入',
					type: 'line',
					showSymbol: false,
					hoverAnimation: false,
					data: data1,
					itemStyle: {
						color: '#ffff4d'
					},
				},
				{
					name: '数据对外共享',
					type: 'line',
					showSymbol: false,
					hoverAnimation: false,
					data: data2,
					itemStyle: {
						color: '#00e6ab',
					},
				}
			],
    }
    console.log('data', data)
    return option
  }
  return (
    <ReactCharts
      style={style}
      option={getOption()}
      ref={getRef}
      className={chartName}
    />
  )
}

Index.propTypes = {
  data: PropTypes.array,
  getRef: PropTypes.func,
  chartName: PropTypes.string,
  style: PropTypes.object,
}

export default Index