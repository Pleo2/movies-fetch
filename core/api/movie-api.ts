import axios from "axios";

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL,
    params: {
        language: 'en',
        api_key: process.env.EXPO_PUBLIC_SECRECT_API_KEY
    }
})
