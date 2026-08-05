import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "127.0.0.1:8000",
});

export const MenuEndpoint = {
    getMenu: () => axiosInstance.get('/menu/menu/'),
    menuById: (id) => axiosInstance.get(`/menu/menu/${id}/`),
    menuByCategory: (category) => axiosInstance.get(`/menu/category/${category}`),
}
