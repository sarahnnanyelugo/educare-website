/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useQuery} from 'react-query'
import {AxiosService} from "./axios-service";
import {ID, isNotEmpty} from "./helpers";

const getItems = (apiPath:string, query?: any) => {
    let url = apiPath;
    let queryParams = {};
    if (typeof query == 'string'){
        url += '?'+query;
    }else if(isNotEmpty(query)){
        queryParams = query;
    }
    return AxiosService.getRequest(`${url}`, queryParams).then((d: any) => {return d;})
};

const sendData = (apiPath:string, data:any={}, options:any= {}) => {
    return AxiosService.postRequest(`${apiPath}`, data, options).then((d: any) => {return d;})
};

const notify = (icon:string, message:string) => {
    return AxiosService.notify(icon, message)
};

const getItem = (apiPath:string, id: ID): Promise<any | undefined> => {
    return AxiosService.getRequest(`${apiPath}/${id}`).then((d: any) => {return d.result;})
};

export {
    getItems,
    sendData,
    getItem,
    notify,
}
