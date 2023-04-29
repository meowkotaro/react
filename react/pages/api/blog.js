import axios from "axios"

const ENDPOINT_URL = (id = "") => `http://localhost:3003/blog/${id}`

const blogApi = {
    async getAll(id) {
        const result = await axios.get(ENDPOINT_URL(id))
        return result.data
    }
}

export default blogApi