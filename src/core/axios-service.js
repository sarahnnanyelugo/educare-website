import axios from 'axios';
import Swal from "sweetalert2";

export class AxiosService {
    static AppApiToken = process.env.REACT_APP_ApiToken;
    static Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    static fireSwal(payload:any={text:"Are you sure you would like to cancel?",
        icon:"warning",
        showCancelButton:true,
        buttonsStyling:false,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText:"No, return",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-active-light"
        }}){
        return Swal.fire({
            text: payload.text?payload.text: "Are you sure you would like to cancel?",
            icon: payload.icon?payload.icon: "warning",
            showCancelButton: payload.showCancelButton?payload.showCancelButton: true,
            buttonsStyling: payload.buttonsStyling?payload.buttonsStyling: false,
            confirmButtonText: payload.confirmButtonText?payload.confirmButtonText: "Yes, cancel it!",
            cancelButtonText: payload.cancelButtonText?payload.cancelButtonText: "No, return",
            customClass: payload.customClass?payload.customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-active-light"
            }})
    }

    static confirm(icon?:any, title?: string, text?:any, btnText?:string, showCancelButton?:boolean, cancelButtonText?:string){
        return Swal.fire({
            title: title? title :'Are you sure?',
            text: text? text :"You won't be able to revert this!",
            icon: icon?icon :'warning',
            showCancelButton: showCancelButton,
            cancelButtonText: cancelButtonText?cancelButtonText: "No",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: btnText? btnText :'Yes, delete it!'
        })
    }
    static endpoint = process.env.base_url ? process.env.base_url : 'http://localhost:8000/api/';

    static notify(icon, title){
        this.Toast.fire({
            icon: icon,
            title: title??"Sorry, looks like there are some errors detected, please try again."
        }).then(
            function () {}
        ).catch(function () {
        })
    }

    static isValidUrl(urlString){
        const urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }
    static get authToken(){
        return localStorage.getItem(this.TOKEN_NAME);
    }

    static getRequest(url, queryParams = {}){
        const authFetch = axios.create({
            // baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                Accept: 'application/json',
            },
        });
        authFetch.interceptors.request.use(
            (request) => {
                // request.headers.set('authorization', `Bearer ${this.authToken}`);
                // request.headers.set('X-AppApiToken', `${this.AppApiToken}`);
                request.headers.set('Accept', `application/json`);
                // must return request
                return request;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        authFetch.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error.response && error.response.status === 404) {
                    // do something
                    if (error.response.data.message) {
                        this.notify('error', error.response.data.message);
                    }else{
                        this.notify('error', error.response.statusText);
                    }
                }
                return Promise.reject(error.response);
            }
        );
        return authFetch.get(this.getValidUrl(url), {
            params:queryParams
        })
    }

    static postRequest(url, data={}, options= {}){
        const authFetch = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                Accept: 'application/json',
            },
        });
        authFetch.interceptors.request.use(
            (request) => {
                request.headers.set('authorization', `Bearer ${this.authToken}`);
                request.headers.set('X-AppApiToken', `${this.AppApiToken}`);
                request.headers.set('Accept', `application/json`);
                request.headers.set('Content-Type', `multipart/form-data`);
                // must return request
                return request;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        authFetch.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error.response && error.response.status === 404) {
                    // do something
                    // console.log('NOT FOUND');
                }
                return Promise.reject(error.response);
            }
        );

        if (!data){
            data = {};
        }

        return authFetch.post(this.getValidUrl(url), data, options);
    }

    static getValidUrl(url){
        if (!this.isValidUrl(url)){
            url = process.env.REACT_APP_API_URL + url;
        }
        return url;
    }

    static updateRequest(url, data={}, options= {}){
        const authFetch = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                Accept: 'application/json',
            },
        });
        authFetch.interceptors.request.use(
            (request) => {
                request.headers.set('authorization', `Bearer ${this.authToken}`);
                request.headers.set('X-AppApiToken', `${this.AppApiToken}`);
                request.headers.set('Accept', `application/json`);
                request.headers.set('Content-Type', `multipart/form-data`);
                // must return request
                return request;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        authFetch.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error.response && error.response.status === 404) {
                    console.log('NOT FOUND');
                    // do something
                }
                return Promise.reject(error);
            }
        );

        if (!data){
            data = {};
        }

        return authFetch.put(this.getValidUrl(url), data, options);
    }

    static deleteRequest(url, options= {}){
        const authFetch = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                Accept: 'application/json',
            },
        });
        authFetch.interceptors.request.use(
            (request) => {
                request.headers.set('authorization', `Bearer ${this.authToken}`);
                request.headers.set('X-AppApiToken', `${this.AppApiToken}`);
                request.headers.set('Accept', `application/json`);
                request.headers.set('Content-Type', `multipart/form-data`);
                // must return request
                return request;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        authFetch.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error.response && error.response.status === 404) {
                    // do something
                    console.log('NOT FOUND');
                }
                return Promise.reject(error);
            }
        );

        return authFetch.delete(this.getValidUrl(url), options);
    }

    static buildFormData = (element, formData, data) =>{
        if (element.name === "") {
            return data;
        }
        let j: any = [];
        switch (element.nodeName) {
            case 'INPUT':
                switch (element.type) {
                    case 'checkbox':
                        if (element.multiple){
                            if (!data[element.name]){
                                data[element.name] = [];
                            }
                            if (element.checked) {
                                data[element.name].push(element.value);
                            }
                        }else{
                            if (element.checked) {
                                data[element.name] = element.value;
                            }else{
                                data[element.name] = 0;
                            }
                        }
                        break;
                    case 'radio':
                        if (element.checked) {
                            data[element.name] = element.value;
                        }else{
                            data[element.name] = 0;
                        }
                        break;
                    case 'file':
                        if (element.multiple){
                            if (element.files){
                                for (let is = 0; is < element.files.length; is++) {
                                    formData.append(element.name+"[]", element.files[is]);
                                }
                            }
                        }else{
                            formData.append(element.name, element.files[0]);
                        }
                        break;
                    default:
                        data[element.name] = element.value;
                        break;
                }
                break;
            case 'TEXTAREA':
                data[element.name] = element.defaultValue;
                break;
            case 'SELECT':
                switch (element.type) {
                    case 'select-one':
                        data[element.name] = element.value;
                        break;
                    case 'select-multiple':
                        let values = [];
                        for (j = element.options.length - 1; j >= 0; j = j - 1) {
                            if (element.options[j].selected) {
                                values.push(element.options[j].value);
                            }
                        }
                        data[element.name] = values;
                        break;
                    default:
                        data[element.name] = element.value;
                        break;
                }
                break;
            case 'BUTTON':
                switch (element.type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        data[element.name] = element.value;
                        break;
                    default:
                        break;
                }
                break;
            default:
                data[element.name] = element.value;
                break;
        }
        return data;
    };

    static serialize (form:any){
        if (!form || form.nodeName !== "FORM") {
            return;
        }

        const formData: FormData = new FormData();
        let data: any = {};
        let i, j: any = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            let element = form.elements[i];
            data = this.buildFormData(element, formData, data);
        }

        data = Object.keys(data).map((key:any) => ({
            key:key,
            value:data[key]
        }));

        data.forEach(function (item, key) {
            formData.set(item.key, item.value);
        });

        return formData;
    }

    static localStorageGet(name:string, value:any) {
        let tempVal = localStorage.getItem(name);
        if (!tempVal && value){
            localStorage.setItem(name, value);
        }
        return tempVal? tempVal : value;
    }

    static localStorageSet(name:string, value:any) {
        return localStorage.setItem(name, value);
    }

    static localStorageUnSet(name:string) {
        return localStorage.removeItem(name);
    }

    static unsetBilling(){
        this.localStorageUnSet('billing_currency');
        this.localStorageUnSet('billing_duration');
        this.localStorageUnSet('package_id');
        this.localStorageUnSet('category_id');
    }

}
