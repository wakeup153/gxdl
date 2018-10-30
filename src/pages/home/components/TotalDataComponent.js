import PropTypes from 'prop-types'

// icon 图标样式
const iconStyle = {
  display: 'inline-block',
  maxHeight: 70,
}
// 文字样式
const textStyle = {
  color: '#29749D',
  margin: '0px 1.2em',
  // fontSize: '1em',
}
// 数据样式
const dataStyle = {
  display: 'inline-block',
  textShadow: '0 0 0.8em rgb(41, 124, 180)',
  fontSize: '2.4em',
  // background: 'linear-gradient(to bottom, #f7ffff, #1d5e99)',
  // backgroundClip: 'text',
  // color: 'transparent',
}
// 单位样式
const unitStyle = {
  fontSize: '1rem',
  marginLeft: '0.2em',
  textShadow: '0 0 0.8em rgb(41, 124, 180)',
}
const Index = ({
  style, // 样式
  iconUrl, // 图标url
  text = '', // 文字
  data = 0, // 数据
  unit = '条', // 单位
}) => {
  const currentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }
  return (
    <div style={currentStyle}>
      <img src={iconUrl} style={iconStyle} alt={iconUrl} />
      <span style={textStyle}>{text}</span>
      <h3 style={dataStyle}>
        {data}
        <span style={unitStyle}>{unit}</span>
      </h3>
    </div>
  )
}

Index.propTypes = {
  style: PropTypes.object,
  iconUrl: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.number,
  unit: PropTypes.string,
}

export default Index
