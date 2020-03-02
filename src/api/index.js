import axios from './request'


export const getData = () => {
	return axios.request({
		url: `/api`,
		method: 'get'
	})
}


