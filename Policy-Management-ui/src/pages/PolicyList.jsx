import { useEffect, useState } from "react";
// import { Button, Row, Col, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Button,
    Row,
    Col,
    Form,
    Pagination
} from "react-bootstrap";

import policyService from "../services/policyService";
import PolicyTable from "../components/policy/PolicyTable";
import PageContainer from "../components/shared/PageContainer";
import ConfirmModal from "../components/common/ConfirmModal";

const PolicyList = () => {

    const navigate = useNavigate();

    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [statusFilter, setStatusFilter] = useState("ALL");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedPolicyId, setSelectedPolicyId] = useState(null);

    const [sortField, setSortField] = useState("policyNumber");
    const [sortDirection, setSortDirection] = useState("asc");

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5;

    useEffect(() => {
        loadPolicies();
    }, []);

    const handleSort = (field) => {

        if (sortField === field) {

            setSortDirection(sortDirection === "asc" ? "desc" : "asc");

        } else {

            setSortField(field);
            setSortDirection("asc");

        }

    };
    const loadPolicies = async () => {
        try {
            const data = await policyService.getAllPolicies();
            setPolicies(data);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load policies.");
        } finally {
            setLoading(false);
        }
    };

    const handleView = (id) => {
        navigate(`/policies/${id}`);
    };

    const handleEdit = (id) => {
        navigate(`/policies/edit/${id}`);
    };

    // Open Delete Modal
    const handleDelete = (id) => {
        setSelectedPolicyId(id);
        setShowDeleteModal(true);
    };

    // Delete after confirmation
    const confirmDelete = async () => {

        try {

            await policyService.deletePolicy(selectedPolicyId);

            toast.success("Policy deleted successfully.");

            await loadPolicies();

        } catch (error) {

            console.error(error);

            toast.error("Unable to delete policy.");

        } finally {

            setShowDeleteModal(false);
            setSelectedPolicyId(null);

        }

    };

    const filteredPolicies = policies.filter((policy) => {

        const matchesSearch =
            policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            policy.policyHolderName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "ALL" ||
            policy.status === statusFilter;

        return matchesSearch && matchesStatus;

    });

    const sortedPolicies = [...filteredPolicies].sort((a, b) => {

        if (a[sortField] < b[sortField]) {
            return sortDirection === "asc" ? -1 : 1;
        }

        if (a[sortField] > b[sortField]) {
            return sortDirection === "asc" ? 1 : -1;
        }

        return 0;

    });

    const indexOfLast = currentPage * pageSize;

    const indexOfFirst = indexOfLast - pageSize;

    const currentPolicies = sortedPolicies.slice(
        indexOfFirst,
        indexOfLast
    );
    const totalPages = Math.ceil(sortedPolicies.length / pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <PageContainer
                title="Policies"
                actions={
                    <Button onClick={() => navigate("/policies/add")}>
                        <PlusCircle className="me-2" />
                        Add Policy
                    </Button>
                }
            >

                <Row className="mb-3">

                    <Col md={4}>

                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />

                    </Col>

                    <Col md={3}>

                        <Form.Select
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="ALL">All Status</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </Form.Select>

                    </Col>

                </Row>

                <PolicyTable
                    policies={currentPolicies}
                    loading={loading}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSort={handleSort}
                />
                <Row className="mt-4">

                    <Col className="d-flex justify-content-end">

                        <Pagination>

                            <Pagination.Prev
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            />

                            {[...Array(totalPages)].map((_, index) => (

                                <Pagination.Item
                                    key={index + 1}
                                    active={currentPage === index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>

                            ))}

                            <Pagination.Next
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            />

                        </Pagination>

                    </Col>

            </Row>

            </PageContainer>

            <ConfirmModal
                show={showDeleteModal}
                title="Delete Policy"
                message="Are you sure you want to delete this policy? This action cannot be undone."
                onConfirm={confirmDelete}
                onCancel={() => setShowDeleteModal(false)}
            />

        </>
    );
};

export default PolicyList;