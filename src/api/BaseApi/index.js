
import axios from "axios";

class BaseApi {
    constructor(url) {
        super();
        this.base_url = url;

    }
    get = async (url, params) => {
        const res = await this.__send(url, 'get', params, this.axiosParams);
        return res
    }
    post = async (url, params) => {
        const res = await this.__send(url, 'post', params, this.axiosParams);
        return res
    }

    put = async (url, params) => {
        const res = await this.__send(url, 'put', params, this.axiosParams);
        return res
    }

    delete = async (url, params) => {
        const res = await this.__send(url, 'delete', params, this.axiosParams);
        return res
    }


    __send = async (url, method, params, axiosParams = {}) => {

        const newAxios = axios[method](url, this.params)
        const res = await newAxios({
            method: method,
            data: params,
            url: url,
            ...axiosParams
        })
        return res;


    }

}
const userApi = new BaseApi('https://discord.com').post('/channels/', { key : '14234' }).then(res => {  } )



class UserApi extends BaseApi {
    constructor (BASE_API) {
        super()
        this.base_url = BASE_API;
    }
    getUser = async( params ) => {
       const res = await this.get('/user/', params )
       return res;
    }
}




export const Api = new UserApi('https://discord.com')

Api.getUser({params : "params"}).then( res => {

}).catch( err => {
    
})


export default BaseApi;