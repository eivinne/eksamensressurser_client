import http from './http.js';
const API_ARTICLE_URL = "/articles";
const API_ARTICLE_CREATE_URL = "/articles/create";
const API_ARTICLE_UPDATE_URL = "/articles/update";
const API_ARTICLE_DELETE_URL = "/articles/delete";
const API_OFFICE_URL = "/offices";
const API_USER_LOGIN_URL = "/users/login";

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

export const login = async (data) => {
    try{
        return await http.post(`${API_USER_LOGIN_URL}`, data);
    }
    catch(err){
        return err.respone.data
    }
}

export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    removeArticle,
    getAllOffices,
    getOffice,
    login,
};