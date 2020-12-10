import http from './http.js';
const API_ARTICLE_URL = "/articles";
const API_ARTICLE_CREATE_URL = "/articles/create";
const API_ARTICLE_UPDATE_URL = "/articles/update";
const API_ARTICLE_DELETE_URL = "/articles/delete";
const API_OFFICE_URL = "/offices";
const API_USER_REGISTER_URL = "/users/create";
const API_USER_UPDATE_URL = "/users/update";
const API_USER_DELETE_URL = "/users/delete";
const API_USER_AUTHENTICATE_URL = "/users/authenticate";
const API_USER_CHECK_TOKEN_URL = "/users/checkToken";
const API_CONTACT_SEND_URL = "/contact/create";
const API_UPLOAD_IMAGE_URL = '/image/upload';
const API_DOWNLOAD_IMAGE_URL = '/image/download';

export const getAllArticles = async (data) => {
    try{
        return await http.get(`${API_ARTICLE_URL}`,data);
    }
    catch(err){
        return err.response.data;
    }
};

export const getAllArticlesPaginated = async (data) => {
    try{
        return await http.get(`${API_ARTICLE_URL}`);
    }
    catch(err){
        return err.response.data;
    }
}

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

export const removeArticle = async (id) => {
    try{
        return await http.delete(`${API_ARTICLE_DELETE_URL}/${id}`);
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

export const registerUser = async (data) => {
    try{
        return await http.post(`${API_USER_REGISTER_URL}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const deleteUser = async (data, id) => {
    try{
        return await http.remove(`${API_USER_DELETE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const updateUser = async (data, id) => {
    try{
        return await http.put(`${API_USER_UPDATE_URL}/${id}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const sendContactRequest = async (data) => {
    console.log(data)
    try{
        return await http.post(`${API_CONTACT_SEND_URL}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const uploadImage = async (image) => {
    try {
      const data = new FormData();
      data.append('image', image);
      return await http.post(`${API_UPLOAD_IMAGE_URL}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      console.log(err);
      return err.response;
    }
  };
  
  export const downloadImage = async (id) => {
    try {
      return await http.get(`${API_DOWNLOAD_IMAGE_URL}/${id}`, {
        responseType: 'blob',
      });
    } catch (err) {
      return err.response;
    }
  };





export default {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    removeArticle,
    checkToken,
    getOffice,
    getAllOffices,
    city,
    login,
    registerUser,
    updateUser,
    deleteUser,
    uploadImage,
    downloadImage,
};