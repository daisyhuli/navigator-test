import axios from 'axios'

/**
 * @description Extend Axios class, add interception function
 * */
class HttpRequest {
	constructor (baseUrl) {
		this.baseUrl = baseUrl
		this.queue = {}
	}
	getInsideConfig () {
		const config = {
			baseURL: this.baseUrl,
			headers: {
				//
			},
			withCredentials: true // carry cookies
		}
		return config
	}
	destroy (url) {
		delete this.queue[url]
	}
	interceptors (instance, url) {
		// request interceptor
		instance.interceptors.request.use(config => {
            this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})
		// response interceptor
		instance.interceptors.response.use(res => {
			this.destroy(url)
			const { data, status } = res
			return { data, status }
		}, error => {
            this.destroy(url)
			let errorInfo = error.response
			if (!errorInfo) {
				const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
				errorInfo = {
					statusText,
					status,
					request: { responseURL: config.url }
				}
			}
			return Promise.reject(error)
		})
	}
	request (options) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}
export default HttpRequest
