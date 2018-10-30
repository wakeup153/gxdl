import ReactCharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

const Index = ({
  data = [],
  getRef,
  chartName = '',
  style = {},
}) => {
  const getOption = () => {
		const treeData = {
			"name": "",
			"symbolSize": [20, 60],
			// "symbolOffset": ['20%', 0],
			"label": {
				show: false,
			},
			"children": [
				{"name": "中国", "value": 593},
				{"name": "测试", "value": 330},
				{"name": "average", "value": 287},
				{"name": "count", "value": 277},
				{"name": "distinct", "value": 292},
				{"name": "div", "value": 595},
				{"name": "eq", "value": 594},
				{"name": "fn", "value": 460},
				{"name": "gt", "value": 603},
				{"name": "gte", "value": 625},
				{"name": "iff", "value": 748},
			]
		}
    const option = {
			tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
			},
			series:[
        {
          type: 'tree',
					data: [treeData],
          // top: '5%',
          // left: '7%',
          // bottom: '2%',
					// right: '60%',
					symbol: 'rect',
					symbolSize: [16, 8],
					lineStyle: {
						color: 'rgba(1, 179, 236, 0.4)',
						width: 4,
						// borderWidth: 10,
						// borderColor: 'red',
						// padding: 10,
						// curveness: 0.4,
					},
					itemStyle: {
						borderWidth: 0,
						color: '#01b3ec',
					},
          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
							align: 'right',
							// height: 40,
							// color: '#fff',
							formatter: '{b}',
						},
          },
          leaves: {
            label: {
              normal: {
                position: 'right',
                // verticalAlign: 'middle',
								align: 'left',
								textBorderColor: '#2a75cf',
								textBorderWidth: 2,
								color: '#fff',
								// width: 100,
							},
            }
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        },
      ]
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