import React from 'react'
import ReactEcharts from 'echarts-for-react'
import PropTypes from 'prop-types'

class ChartShowLoadingComponent extends React.Component {
  constructor () {
    super()
    this._t = null
    this.onChartReady = this.onChartReady.bind(this)
  }
  componentWillUnmount () {
    clearTimeout(this._t)
  }

  onChartReady (chart) {
    this._t = setTimeout(() => {
      chart.hideLoading()
    }, 3000)
  }

  render () {
    const { style } = this.props
    const getOtion = () => {
      const option = {
        // title: {
        //   text: '基础雷达图',
        // },
        tooltip: {},
        // legend: {
        //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
        // },
        radar: {
          indicator: [
            { name: 'QQ', max: 6500, color: '#64c6e7' },
            { name: 'Wechat', max: 16000, color: '#64c6e7' },
            { name: 'Facebook', max: 30000, color: '#64c6e7' },
            { name: 'Twitter', max: 38000, color: '#64c6e7' },
            { name: 'Lion', max: 52000, color: '#64c6e7' },
          ],
        },
        series: [{
          // name: '预算 vs 开销',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000],
              // name: '预算分配',
              itemStyle: {
                color: '#ffde00',
              },
              areaStyle: {
                color: '#ffde00',
              },
            },
            {
              value: [5000, 14000, 28000, 31000, 42000],
              // name: '实际开销',
              itemStyle: {
                color: '#eb7a2d',
              },
              areaStyle: {
                color: '#eb7a2d',
              },
            },
            {
              value: [500, 14400, 25000, 23000, 32000],
              // name: '预算开销',
              itemStyle: {
                color: '#1e94e7',
              },
              areaStyle: {
                color: '#1e94e7',
              },
            },
          ],
        }],
      }
      return option
    }
    // const getLoadingOption = () => {
    //   const option = {
    //     text: '加载中...',
    //     color: '#4413c2',
    //     textColor: '#270240',
    //     maskColor: 'rgba(255, 255, 255, 0.3)',
    //     zlevel: 0,
    //   }
    //   return option
    // }
    return (
      <ReactEcharts
        style={style}
        option={getOtion()}
        onChartReady={this.onChartReady}
        // loadingOption={getLoadingOption()}
        // showLoading
      />
    )
  }
}

ChartShowLoadingComponent.propTypes = {
  style: PropTypes.object,
}

export default ChartShowLoadingComponent