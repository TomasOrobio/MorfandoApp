import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

const server = 'http://ec2-54-91-213-198.compute-1.amazonaws.com:3000/api/v1.1/';

export const fetchEndpoint = (endpoint: string, method: string, body: any, params: string = '') => {
	const headers = {
		'Content-Type': 'application/json'
	};
	const options = {
		method,
		headers,
		body: method === 'GET' ? undefined : JSON.stringify(body)
	};
	return axios(`${server}${endpoint}${params}`, options)
		.then((res) => res.data)
		.catch((error) => {
			console.error(error);
			return { error };
		});
};

export const fetchGet = (endpoint: string, params: any) => fetchEndpoint(endpoint, 'GET', {}, params);
export const fetchPost = (endpoint: string, body: any) => fetchEndpoint(endpoint, 'POST', body);
export const fetchPut = (endpoint: string, body: any) => fetchEndpoint(endpoint, 'PUT', body);

const axios = Axios.create();

const tokenKey = '@auth-token';

const getToken = () => {
	return AsyncStorage.getItem(tokenKey);
};

const setToken = async (token: string) => {
	await AsyncStorage.setItem(tokenKey, token);
};

const isTokenExpired = async () => {
	const token = await getToken();
	if (!token) return false;
	const decoded: { exp: number } = jwtDecode(token);
	return decoded.exp > Date.now();
};

const getRefreshedToken = () => {
	return axios.post(`${server}/auth/refresh`, { token: getToken() }).then((res) => res.data.token);
};

const refreshToken = async () => {
	const newToken = await getRefreshedToken();
	setToken(newToken);
};

axios.interceptors.request.use(async (config) => {
	if (await isTokenExpired()) {
		await refreshToken();
	}
	if (config.headers) {
		config.headers.Authorization = await getToken();
	}
	return config;
});
