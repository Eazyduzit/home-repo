import axios from 'axios';

export class AxiosListService{
    private static serverURL = 'https://jsonplaceholder.typicode.com'

    public static getAllUsers() {
        const dataURL = `${this.serverURL}/users`
        return axios.get(dataURL)
    }
} 