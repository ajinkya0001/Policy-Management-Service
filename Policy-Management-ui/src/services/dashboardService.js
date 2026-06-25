import api from "./api";

const getDashboardStatistics = async () => {
    const response = await api.get("/policies/dashboard");
    return response.data;
};

export default {
    getDashboardStatistics
};