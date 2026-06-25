import api from "./api";

const POLICY_ENDPOINT = "/policies";

const getAllPolicies = async () => {
    const response = await api.get("/policies");
    return response.data;
};

const getPolicyById = async (id) => {
    const response = await api.get(`${POLICY_ENDPOINT}/${id}`);
    return response.data;
};

const createPolicy = async (policy) => {
    const response = await api.post(POLICY_ENDPOINT, policy);
    return response.data;
};

const updatePolicy = async (id, policy) => {
    const response = await api.put(`${POLICY_ENDPOINT}/${id}`, policy);
    return response.data;
};

const deletePolicy = async (id) => {
    await api.delete(`${POLICY_ENDPOINT}/${id}`);
};

const policyService = {
    getAllPolicies,
    getPolicyById,
    createPolicy,
    updatePolicy,
    deletePolicy,
};

export default policyService;