import axios from "axios";

export const baseURL = 'https://jsonplaceholder.typicode.com'

export default axios.create({
  baseURL
})