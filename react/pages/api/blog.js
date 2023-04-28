import axios from "axios"

const ENDPOINT_URL = "http://localhost:3003/blog"

const blogApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL)
        return result.data
    }
}

export default blogApi