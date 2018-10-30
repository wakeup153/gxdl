import PropTypes from 'prop-types'

// 文字样式
const textStyle = {
  color: '#fff',
}
// 图片样式
const imgStyle = {
  maxWidth: '30%',
  maxHeight: '0.4em',
}
const Index = ({
  style = {}, // 样式
  text = '', // 文字
}) => {
  const currentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxSize: 'border-box',
    padding: '0 0.4em',
    ...style,
  }
  return (
    <div style={currentStyle}>
      <img src="/public/images/xodb_title_line.png" alt="xodb_title_line" style={{ transform: 'rotate(180deg)', ...imgStyle }} />
      <span style={textStyle}>{text}</span>
      <img src="/public/images/xodb_title_line.png" alt="xodb_title_line" style={imgStyle} />
    </div>
  )
}

Index.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
}

export default Index
