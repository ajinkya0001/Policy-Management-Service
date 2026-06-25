import { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const PolicyForm = ({ initialValues, onSubmit, submitLabel = "Save Policy" }) => {

    const [formData, setFormData] = useState({
        policyNumber: initialValues?.policyNumber || "",
        policyHolderName: initialValues?.policyHolderName || "",
        policyType: initialValues?.policyType || "",
        premiumAmount: initialValues?.premiumAmount || "",
        status: initialValues?.status || "ACTIVE"
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        onSubmit(formData);
    };

    return (

        <Card className="shadow-sm border-0">

            <Card.Body>

                <Form onSubmit={handleSubmit}>

                    <Row>

                        <Col md={6} className="mb-3">

                            <Form.Label>
                                Policy Number
                            </Form.Label>

                            <Form.Control
                                name="policyNumber"
                                value={formData.policyNumber}
                                onChange={handleChange}
                                placeholder="POL-1001"
                                required
                            />

                        </Col>

                        <Col md={6} className="mb-3">

                            <Form.Label>
                                Policy Holder Name
                            </Form.Label>

                            <Form.Control
                                name="policyHolderName"
                                value={formData.policyHolderName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />

                        </Col>

                    </Row>

                    <Row>

                        <Col md={6} className="mb-3">

                            <Form.Label>
                                Policy Type
                            </Form.Label>

                            <Form.Select
                                name="policyType"
                                value={formData.policyType}
                                onChange={handleChange}
                                required
                            >

                                <option value="">Select</option>
                                <option value="AUTO">Auto</option>
                                <option value="HOME">Home</option>
                                <option value="LIFE">Life</option>
                                <option value="HEALTH">Health</option>

                            </Form.Select>

                        </Col>

                        <Col md={6} className="mb-3">

                            <Form.Label>
                                Premium Amount
                            </Form.Label>

                            <Form.Control
                                type="number"
                                name="premiumAmount"
                                value={formData.premiumAmount}
                                onChange={handleChange}
                                placeholder="2500"
                                required
                            />

                        </Col>

                    </Row>

                    <Row>

                        <Col md={6} className="mb-4">

                            <Form.Label>
                                Status
                            </Form.Label>

                            <Form.Select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >

                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>

                            </Form.Select>

                        </Col>

                    </Row>

                    <Button
                        type="submit"
                        variant="primary"
                    >
                        {submitLabel}
                    </Button>

                </Form>

            </Card.Body>

        </Card>

    );

};

export default PolicyForm;