import axios from "axios";

export const baseURL = 'http://jsonplaceholder.typicode.com'

export default axios.create({
  baseURL
})