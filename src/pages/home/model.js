// import { getSourceData } from './services/home'

/**
 * 将注释取消后会丢失样式
 */
export default {
	namespace: 'home',
	state: {
		data: [1, 2],
	},
	subscriptions: {
		setup ({ history, dispatch }) {
			return history.listen(({ pathname }) => {
				if (pathname.toLowerCase() === '/home') {
					// dispatch({
					// 	type: 'query',
					// })
				}
			})
		}
	},
	effects: {
		// * query ({ payload }, { call }) {
		// 	const result = yield call(getSourceData, payload)
		// 	console.log('result', result)
		// }
	},
	reducers: {},
}