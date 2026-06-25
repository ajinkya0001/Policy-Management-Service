import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PolicyForm from "../components/policy/PolicyForm";
import policyService from "../services/policyService";
import { toast } from "react-toastify";

const EditPolicy = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [policy, setPolicy] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPolicy();
    }, []);

    const loadPolicy = async () => {

        try {

            const response = await policyService.getPolicyById(id);

            setPolicy(response);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = async (updatedPolicy) => {

        try {

            await policyService.updatePolicy(id, updatedPolicy);

            toast.success("Policy updated successfully.");

            navigate("/policies");

        } catch (error) {

            console.error(error);

            toast.error("Unable to save policy.");
        }

    };

    if (loading) {
        return <h3>Loading...</h3>;
    }

    return (

        <div>

            <h2 className="mb-4">
                Edit Policy
            </h2>

            <PolicyForm
                initialValues={policy}
                onSubmit={handleSubmit}
                submitLabel="Update Policy"
            />

        </div>

    );

};

export default EditPolicy;