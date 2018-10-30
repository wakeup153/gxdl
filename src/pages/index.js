import Redirect from 'umi/redirect'
import WidthRouter from 'umi/withRouter'

export default WidthRouter(props => (
  <Redirect to="/home" {...props} />
))