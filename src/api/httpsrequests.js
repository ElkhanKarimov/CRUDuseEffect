import axios from "axios";
import { BASE_URL } from "./base_url";

export const getAllProducts = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/products`)
        .then(res => {
            globalData = res.data
        });
    return globalData
}

export const getProductByID = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
        .then(res => {
            globalData = res.data
        })
    return globalData
}
export const postProduct = (newProduct) => {
    axios.post(`${BASE_URL}/products`, newProduct)
}

export const deleteProductByID = (id) => {
    axios.delete(`${BASE_URL}/products/${id}`)
}

export const editProductByID = (id, updatedProduct) => {
    axios.put(`${BASE_URL}/products/${id}`, updatedProduct)
}