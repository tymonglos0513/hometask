import axios, { AxiosInstance } from 'axios';

export const createInstance = ({
    apiUrl
}: {
    apiUrl: string;
}): AxiosInstance => {

    const instance = axios.create({
        baseURL: apiUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return instance;
};