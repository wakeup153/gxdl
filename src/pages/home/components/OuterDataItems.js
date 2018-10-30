import PropTypes from 'prop-types'

// 图标样式
const iconStyle = {
  maxHeight: '3.4vh',
  maxWidth: '2vw'
}
// 数据样式
const dataStyle = {
  display: 'inline-block',
  fontSize: '1.22vw',
  color: '#fff',
  textShadow: '0 0 0.8em rgb(41, 124, 180)',
}
// 文字样式
const textStyle = {
  fontSize: '0.8vw',
}
// 单位样式
const unitStyle = {
  fontSize: '0.8vw',
  margin: '0 0.4em',
}

const Index = ({
  style = {},
  iconUrl = '',
  data = 0,
  unit = '个',
  text = '',
}) => {
  return (
    <div style={style}>
      <img src={iconUrl} style={iconStyle} />
      <div style={{ display: 'inline-block', marginLeft: '0.4em', color: '#55aacb', textAlign: 'left' }}>
        <p>
          <span style={dataStyle}>{data}</span>
          <span style={unitStyle}>{unit}</span>
        </p>
        <span style={textStyle}>{text}</span>
      </div>
    </div>
  )
}

Index.propTypes = {
  style: PropTypes.object,
  iconUrl: PropTypes.string,
  data: PropTypes.number,
  unit: PropTypes.string,
  text: PropTypes.string,
}

export default Index
