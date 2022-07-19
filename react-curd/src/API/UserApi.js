import Axios from "axios";


const axiosIns = Axios.create({
    baseURL: " http://localhost:5000"
});

const UserApi = {
    getAll: () => {
        return axiosIns.request({
            method: 'GET',
            url: `/users`
        })
    },
    getSingle: (id) => {
        return axiosIns.request({
            methode: 'GET',
            url: `/users/${id}`
        })
    },
    create: (user) => {
        return axiosIns.request({
            method: 'POST',
            url: `/users`,
            data: user
        })
    },
    update: (user, id) => {
        return axiosIns.request({
            method: 'PUT',
            url: `/users/${id}`,
            data: user
        })
    },
    delete: (id) => {
        return axiosIns.request({
            method: 'DELETE',
            url: `/users/${id}`
        })
    }
};
export default UserApi;