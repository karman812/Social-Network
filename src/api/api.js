import * as axios from "axios";
import React from 'react';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

export const getUsers = (currentPage = 1, pageSize = 20) => {
    return (axios.get(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`)).then(response => {
        return response.data
    })
}
export const getProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}
