import { Get, Post, Put } from "./axios";

export const fetchProducts = async () => {
    try {
        const response = await Get('/products')
        return response.data
    } catch (error) {
        console.log('error in fetchProducts method')
    }
}
