import api from "../axios";

const useUsersApi = {
    getProfile: async (date="dsabirbaev") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    paginateFollowers: async (num=1) => api.get(`/users/${"dsabirbaev"}/followers?page=${num}`),
    followings: async (date="dsabirbaev") => api.get(`/users/${date}/followings`),
    repostories: async (date="dsabirbaev") => api.get(`/users/${date}/repos`),
    stars: async (date="dsabirbaev") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;