import Axios, {AxiosPromise, AxiosRequestConfig, Method} from "axios"

Axios.interceptors.request.use(
	(cof) => {
		return cof
	},
	(err) => {
		return Promise.reject(err)
	}
)

Axios.interceptors.response.use(
	(res) => {
		return Promise.resolve(res)
	},
	(err) => {
		if (err.response.status === 400) {
			//
		} else if (err.response.status === 500) {
			//
		}
		return Promise.reject(err)
	}
)

const AxiosDoll = function (method: Method, url: string, params = {}): AxiosPromise {
	const config: AxiosRequestConfig = {
		method,
		url,
		baseURL: "http://127.0.0.1:7001",
		...params,
	}
	return Axios(config)
}

export default AxiosDoll
