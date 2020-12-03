import http from './http.js';
const API_OFFICE_URL = "/offices";

export const list = async () => {
    try{
        return await http.get(`${API_OFFICE_URL}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const city = async (city) => {
    try{
        return await http.get(`${API_OFFICE_URL}/${city}`);
    }
    catch(err){
        return err.response.data;
    }
};

/*export const get = async (id) => {
    try{
        return await http.get(`${API_OFFICE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};*/


export default {
    list,
    city
};