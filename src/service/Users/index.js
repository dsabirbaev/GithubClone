import api from "../axios";

const useUsersApi = {
    getProfile: async (date="dsabirbaev") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    paginateFollowers: async (num=1) => api.get(`/users/${"dsabirbaev"}/followers?page=${num}`),
    paginateFollowings: async (num=1) => api.get(`/users/${"dsabirbaev"}/following?page=${num}`),
    paginateRepository: async (num=1) => api.get(`/users/${"dsabirbaev"}/repos?page=${num}`),
    repostories: async (date="dsabirbaev") => api.get(`/users/${date}/repos`),
    stars: async (date="dsabirbaev") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;