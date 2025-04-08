import axios from "axios";

const BASE_URL = "http://localhost:3000";

class UserService {
    static async GetUsers(query = '') {
        try {
            const url = new URL(BASE_URL);
            if (query) {
                url.searchParams.append('term', query.trim());
            }
            
            const response = await axios.get(url.toString());
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users. Please try again later.');
        }
    }
}

export default UserService;