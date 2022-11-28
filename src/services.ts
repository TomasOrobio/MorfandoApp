const server = 'http://ec2-54-91-213-198.compute-1.amazonaws.com:3000/api/v1.1/';

export const fetchEndpoint = (endpoint: string, method: string, body: any) => {
	const headers = {
		'Content-Type': 'application/json'
	};
	const options = {
		method,
		headers,
		body: JSON.stringify(body)
	};
	return fetch(`${server}${endpoint}`, options)
		.then((res) => res.json())
		.catch((error) => {
			console.error(error);
			return { error };
		});
};

export const fetchGet = (endpoint: string) => fetchEndpoint(endpoint, 'GET', {});
export const fetchPost = (endpoint: string, body: any) => fetchEndpoint(endpoint, 'POST', body);
export const fetchPut = (endpoint: string, body: any) => fetchEndpoint(endpoint, 'PUT', body);
