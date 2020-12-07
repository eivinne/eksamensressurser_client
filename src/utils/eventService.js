import http from './http.js';
const API_ARTICLE_URL = "/articles";
const API_ARTICLE_CREATE_URL = "/articles/create";
const API_ARTICLE_UPDATE_URL = "/articles/update";
const API_ARTICLE_DELETE_URL = "/articles/delete";
const API_OFFICE_URL = "/offices";
const API_USER_LOGIN_URL = "/users/login";
const API_USER_AUTHENTICATE_URL = "/users/authenticate";
const API_USER_CHECK_TOKEN_URL = "/users/checkToken";


export const getAllArticles = async () => {
    try{
        return await http.get(`${API_ARTICLE_URL}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const getArticle = async (id) => {
    try{
        return await http.get(`${API_ARTICLE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const createArticle = async (data) => {
    try{
        return await http.post(`${API_ARTICLE_CREATE_URL}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const updateArticle = async (data, id) => {
    try{
        return await http.put(`${API_ARTICLE_UPDATE_URL}/${id}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const removeArticle = async (data, id) => {
    try{
        return await http.remove(`${API_ARTICLE_DELETE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const getAllOffices = async () => {
    try{
        return await http.get(`${API_OFFICE_URL}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const getOffice = async (id) => {
    try{
        return await http.get(`${API_OFFICE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

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

export const login = async (data) => {
    try{
        const test = await http.post(`${API_USER_AUTHENTICATE_URL}`, data);
        console.log("test");
        return test
    }
    catch(err){
        return err.respone
    }
}

export const checkToken = async (data) => {
    try{
        const test2 =  await http.post(`${API_USER_CHECK_TOKEN_URL}`, data);
        console.log(test2);
        return test2;
    }
    catch(err){
        return err.respone
    }
}




export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    removeArticle,
    checkToken,
    getOffice,
    getAllOffices,
    list,
    city,
    login,
};