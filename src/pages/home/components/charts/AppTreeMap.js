import ReactCharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'

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
      series: [{
        type: 'treemap',
        data: [
          {
            name: 'nodeA',            // First tree
            value: 100,
            children: []
          },
          {
            name: 'nodeB',            // Second tree
            value: 120,
            children: []
          },
          {
            name: 'nodeC',            // Second tree
            value: 140,
            children: []
          },
          {
            name: 'nodeD',            // Second tree
            value: 60,
            children: []
          },
          {
            name: 'nodeE',            // Second tree
            value: 100,
            children: []
          }
        ],
        nodeClick: false,
        breadcrumb: {
          show: false,
        }
      }],
    }
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