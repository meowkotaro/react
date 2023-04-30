import axios from "axios"

const ENDPOINT_URL = (id = "") => `${process.env.NEXT_PUBLIC_JSOU_SERVER}/cats/${id}`
// const ENDPOINT_URL = (id = "") => `http://localhost:3003/cats/${id}`

const catsApi = {
    async getAll(id) {
        const result = await axios.get(ENDPOINT_URL(id))
        return result.data
    }
}

export default catsApi