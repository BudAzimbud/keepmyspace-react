import axios from 'axios'

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080'
})

httpRequest.interceptors.response.use(response => response,
    error => {
        // if (error.response.status === 401) {
        //     window.location.href = "/login"
        // }
        switch (error.response.status) {
            case 401:
                console.log(window)
                window.location.href = "/login"
                localStorage.removeItem('token')
                return error
            default:
                return error
        }
    }
)

export default httpRequest