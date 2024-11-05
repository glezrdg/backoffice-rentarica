import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getItem } from '../utility/localStorageControl';
import { API_URL } from '../utility/constants';

const API_ENDPOINT = `${API_URL}api`;

const authHeader = () => ({
  Authorization: `Bearer ${getItem('auth')?.token}`,
});

const client: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${getItem('auth')?.token}`,
    'Content-Type': 'application/json',
  },
});


class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: API_ENDPOINT + path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: API_ENDPOINT + path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: API_ENDPOINT + path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static delete(path = '', data = {}) {
    return client({
      method: 'DELETE',
      url: API_ENDPOINT + path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: API_ENDPOINT + path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */

client.interceptors.response.use(
  response => response,
  error => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        // do something here
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  },
);
export { DataService };