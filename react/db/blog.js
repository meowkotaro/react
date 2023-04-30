import axios from "axios"

const ENDPOINT_URL = (id = "") => `${process.env.NEXT_PUBLIC_JSOU_SERVER}/blog/${id}`
// const ENDPOINT_URL = (id = "") => `http://localhost:3003/blog/${id}`

const blogApi = {
    async getAll(id) {
        // console.log(ENDPOINT_URL())
        const result = await axios.get(ENDPOINT_URL(id))
        return result.data
    }
}

export default blogApi