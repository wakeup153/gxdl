import { request } from 'utils'

const api_prefix = '/api'

export function getSourceData (data) {
	return request({
		url: `${api_prefix}/querySource`,
		method: 'get',
		data,
	})
}