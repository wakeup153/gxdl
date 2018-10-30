import PropTypes from 'prop-types'

// 文字样式
const textStyle = {
  color: '#fff',
}
// 图片样式
const lineStyle = {
  maxWidth: '60%',
  maxHeight: '0.4em',
}
const Index = ({
  style = {}, // 样式
  text = '', // 文字
}) => {
  const currentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSize: 'border-box',
    paddingLeft: '0.1em',
    paddingRight: '2em',
    ...style,
  }
  return (
    <div style={currentStyle}>
     <div 
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <img src="/public/images/xodb_title_blue_block.png" alt="xodb_title_blue_block" style={{ maxHeight: '1em' }} />
      <img src="/public/images/xodb_right_arrow.png" alt="xodb_right_arrow" style={{ maxHeight: '1em', marginLeft: '0.6em' }} />
     </div>
     <span style={textStyle}>{text}</span>
     <img src="/public/images/xodb_title_big_line.png" alt="xodb_title_big_line" style={lineStyle} />
    </div>
  )
}

Index.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
}

export default Index
