import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

type ResponseType = {
  errorText: string
  info: string
  yourBody: { success: boolean }
  yourQuery: {}
}

export const authAPI = {
  testCall: (success: boolean) => {
    return axiosInstance.post<ResponseType>(`auth/test`, {
      success
    })
  }
}

