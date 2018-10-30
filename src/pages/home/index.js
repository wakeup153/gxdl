import { connect } from 'dva'
import moment from 'moment'
import PropTypes from 'prop-types'
import TotalDataComponent from './components/TotalDataComponent'
import SplitCenterText from './components/SplitCenterText'
import SplitLeftText from './components/SplitLeftText'
import OuterDataItem from './components/OuterDataItems'
import CatalogPieChart from './components/charts/CatalogPieChart'
import AppTreeMap from './components/charts/AppTreeMap'
import NightingalePieChart from './components/charts/NightingalePieChart'
import ChartShowLoadingComponent from './components/charts/ChartShowLoadingComponent'
import ProvinceLeftTree from './components/charts/ProvinceLeftTree'
import BubbleGradientComponent from './components/charts/BubbleGradientComponent'
import DataShareChart from './components/charts/DataShareChart'
import styles from'./index.less'
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

const Index = ({
  home,
  loading,
}) => {
  console.log('home', home, loading)
  const weekday = week[moment().weekday()]
  const year = moment().format('YYYY年MM月DD日')
  return (
    <div className={styles.bigContainer}>
      {/* <ChartAPIComponent /> */}
      <div className={styles.header}>
        <img className={styles.headBg} src="/public/images/xodb_head_bg.png" alt="head_bg" />
        <img className={styles.leftMenu} src="/public/images/xodb_head_menu.png" alt="xodb_head_menu" />
        <h2 className={styles.title}>数据资源统计</h2>
        <div className={styles.headRightBox}>
          <img src="/public/images/xodb_head_weather.png" alt="xodb_head_weather" className={styles.timeIcon}/>
          <time className={styles.time}>
            {
              `${year} ${weekday}`
            }
          </time>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.leftContentForTop}>
            <div className={styles.l_topForleftBox}>
              <TotalDataComponent data={12387} style={{ color: '#fff', height: '20%' }} iconUrl="public/images/xodb_total_catalog.png" text="总编目数量" />
              <div className={styles.dataTipsTotal}>
                <SplitCenterText text="数据主题统计" />
                <CatalogPieChart style={{ height: 'calc(100% - 16px)' }} />
              </div>
              <div className={styles.appSysData}>
                <SplitCenterText text="各应用系统数据" />
                <AppTreeMap style={{ height: 'calc(100% - 16px)' }} />
              </div>
            </div>
            <div className={styles.l_topForRightBox}>
              <TotalDataComponent data={58745} style={{ color: '#fff', height: '20%' }} iconUrl="public/images/xodb_total_data.png" text="总数据条数" />
              <div className={styles.dataTipsTotal}>
                <SplitCenterText text="数据主题统计" />
                <NightingalePieChart style={{ height: 'calc(100% - 16px)' }} />
              </div>
              <div className={styles.appSysData}>
                <SplitCenterText text="各应用系统数据" />
                <ChartShowLoadingComponent style={{ height: 'calc(100% - 16px)' }} />
              </div>
            </div>
          </div>
          <div className={styles.leftContentForBottom}>
            <div className={styles.bottomTitle}>
              <img src="/public/images/xodb_title_blue_block.png" alt="xodb_title_blue_blockjpg" />
              <img src="/public/images/xodb_right_arrow.png" style={{ margin: '0 0.6em' }} alt="xodb_right_arrow" />
              <h4>共享数据统计</h4>
            </div>
            <BubbleGradientComponent style={{ height: '88%'}} />
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.r_outerData}>
            <div className={styles.dataGroup}>
              <OuterDataItem style={{ display: 'inline-block' }} iconUrl="/public/images/xodb_outer_interface.png" text="外部数据接口" data={174515} />
              <OuterDataItem style={{ display: 'inline-block' }} iconUrl="/public/images/xodb_file.png" text="文件" data={124512} />
              <OuterDataItem style={{ display: 'inline-block' }} iconUrl="/public/images/xodb_database.png" text="数据编目" data={254687} unit="条" />
              <OuterDataItem style={{ display: 'inline-block' }} iconUrl="/public/images/xodb_internet.png" text="互联网数据" data={789256} unit="条" />
            </div>
            <h3 className={styles.outDataCount}>外部数据统计</h3>
          </div>
          <div className={styles.r_dataSend}>
            <SplitLeftText text="上月各市数据报送情况" />
            <div className={styles.r_provinceBox}>
              <h3>浙江省</h3>
            </div>
            <div className={styles.r_provinceTree}>
              <ProvinceLeftTree style={{ height: '100%' }} />
              {/* <CityTree style={{ width: '100%', height: '100%' }} /> */}
            </div>
          </div>
          <div className={styles.r_dataShare}>
            <SplitLeftText text="实时数据共享交换情况" />
            <DataShareChart style={{ height: 'calc(100% - 16px)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

Index.propTypes = {
  home: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ home, loading }) => ({ home, loading }))(Index)
