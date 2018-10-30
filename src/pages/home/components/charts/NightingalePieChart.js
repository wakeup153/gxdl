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
    const option = {
      tooltip: {
        show: true,
        trigger: 'item',
        // formatter: '{b}:<br /> {d}'
      },
      legend: {
        // x: 'center',
        // y: 'right',
        right: '4%',
        bottom: '4%',
        itemHeight: 8,
        itemWidth: 8,
        textStyle: {
          color: '#72a8db',
        },
        orient: 'vertical',
        data: ['rose1','rose2','rose3','rose4','rose5','rose6']
      },
      series : [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 86],
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data:[
            { value:10, name:'rose1', itemStyle: { color: '#26c9ff' }},
            { value:5, name:'rose2', itemStyle: { color: '#ffff4d' }},
            { value:15, name:'rose3', itemStyle: { color: '#ff9326' }},
            { value:25, name:'rose4', itemStyle: { color: '#00b285' }},
            { value:20, name:'rose5', itemStyle: { color: '#7373ff' }},
            { value:35, name:'rose6', itemStyle: { color: '#007dfe' }},
          ]
        }
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