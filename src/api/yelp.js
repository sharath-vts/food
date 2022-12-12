import axios from "axios";  

export default axios.create({
    baseURL: 'https://api.imgflip.com',//'https://preprod.risebuildings.com/api',
    headers: {
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDUyNzNhZmUxMGU0MzAyZTlmMDQxMSIsInByb3BlcnRpZXMiOlsiNWRkNTI2NDRmZTEwZTQzMDJlOWYwM2YyIl0sImlhdCI6MTY3MDIzMjgwNiwiZXhwIjoxNjcwODM3NjA2fQ.ZQPUko9NIrA7Ay7nPXEr59A1uSw-nfFjy32HxfHD1U4'
    }
})