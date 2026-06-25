import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

import policyService from "../services/policyService";

const PolicyDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [policy, setPolicy] = useState(null);

    useEffect(() => {

        loadPolicy();

    }, []);

    const loadPolicy = async () => {

        try {

            const data = await policyService.getPolicyById(id);

            setPolicy(data);

        } catch (error) {

            console.error(error);

        }

    };

    if (!policy) {

        return <h4>Loading...</h4>;

    }

    return (

        <Card className="shadow-sm">

            <Card.Body>

                <h2 className="mb-4">
                    Policy Details
                </h2>

                <table className="table">

                    <tbody>

                        <tr>
                            <th width="250">Policy Number</th>
                            <td>{policy.policyNumber}</td>
                        </tr>

                        <tr>
                            <th>Policy Holder</th>
                            <td>{policy.policyHolderName}</td>
                        </tr>

                        <tr>
                            <th>Policy Type</th>
                            <td>{policy.policyType}</td>
                        </tr>

                        <tr>
                            <th>Premium</th>
                            <td>₹ {policy.premiumAmount}</td>
                        </tr>

                        <tr>
                            <th>Status</th>

                            <td>

                                <Badge bg="success">

                                    {policy.status}

                                </Badge>

                            </td>

                        </tr>

                    </tbody>

                </table>

                <div className="mt-4">

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/policies")}
                    >
                        Back
                    </Button>

                    <Button
                        className="ms-2"
                        onClick={() => navigate(`/policies/edit/${id}`)}
                    >
                        Edit
                    </Button>

                </div>

            </Card.Body>

        </Card>

    );

};

export default PolicyDetails;