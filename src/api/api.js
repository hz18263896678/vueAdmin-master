import axios from 'axios';
import vr from 'vue-resource';
import Vue from 'vue'
const baseUrl = 'http://192.168.0.115/SmartJ';

Vue.use(vr);
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true

let base = '';

export const postLogin = params => {
    Vue.http.post(baseUrl+'/login.do', params).then(res => res);
}
//一下为axios封装的api，暂时不用管他
export const requestLogin = params => {
    return axios.post(`${base}/login.do`, params).then(res => res.data);
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};

export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`, {params: params});
};

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {params: params});
};

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {params: params});
};

export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

export const addUser = params => {
    return axios.get(`${base}/user/add`, {params: params});
};