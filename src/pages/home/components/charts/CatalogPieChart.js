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
        orient: 'vertical',
        right: '4%',
        bottom: '4%',
        itemHeight: 8,
        itemWidth: 8,
        data: ['编目1', '编目2', '编目3'],
        textStyle: {
          color: '#72a8db',
        },
      },
      series : [
        {
          // name: '访问来源',
          type: 'pie',
          // radius: '55%',
          // center: ['50%', '60%'],
          data: [
            { value: 200, name: '编目1', itemStyle: { color: '#FED200' }},
            { value: 300, name: '编目2', itemStyle: { color: '#00D4A4' }},
            { value: 230, name: '编目3', itemStyle: { color: '#25C9FE' }},
          ],
          itemStyle: {
            borderWidth: 4,
            borderColor: '#041332',
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              lineHeight: 14,
              formatter: '{b}\n {d|{d}%}',
              rich: {
                d: {
                  color: '#fff',
                  // fontSize: 16,
                },
              }
            }
          },
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