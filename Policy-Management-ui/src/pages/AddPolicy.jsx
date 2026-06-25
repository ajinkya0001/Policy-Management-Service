import { useNavigate } from "react-router-dom";

import PolicyForm from "../components/policy/PolicyForm";
import policyService from "../services/policyService";
import { toast } from "react-toastify";

const AddPolicy = () => {

    const navigate = useNavigate();

    const handleSubmit = async (policy) => {

        try {

            await policyService.createPolicy(policy);


            toast.success("Policy created successfully.");

            navigate("/policies");

        } catch (error) {

            console.error(error);

            toast.error("Unable to save policy.");

        }

    };

    return (

        <div>

            <h2 className="mb-4">
                Add Policy
            </h2>

            <PolicyForm
                initialValues={{}}
                onSubmit={handleSubmit}
                submitLabel="Save Policy"
            />

        </div>

    );

};

export default AddPolicy;