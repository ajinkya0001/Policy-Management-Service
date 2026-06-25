import { Table, Badge } from "react-bootstrap";
import { Eye, PencilSquare, Trash } from "react-bootstrap-icons";
// import { getStatusVariant } from "../../utils/formatters";
import {
    getStatusVariant,
    formatCurrency
} from "../../utils/formatters";
import Loader from "../common/Loader";
import EmptyState from "../common/EmptyState";

const PolicyTable = ({
        policies,
        loading,
        onView,
        onEdit,
        onDelete
    }) => {

    if (loading) {

        return <Loader />;

    }

    if (policies.length === 0) {

        return (

            <EmptyState
                message="No policies available."
            />

        );

    }

    return (
        <Table striped bordered hover responsive>

            <thead className="table-dark">

                <tr>
                    <th>Policy Number</th>
                    <th>Holder Name</th>
                    <th>Type</th>
                    <th>Premium</th>
                    <th>Status</th>
                    <th width="180">Actions</th>
                </tr>

            </thead>

            <tbody>

                {policies.map((policy) => (

                    <tr key={policy.policyId}>

                        <td>{policy.policyNumber}</td>

                        <td>{policy.policyHolderName}</td>

                        <td>{policy.policyType}</td>

                        <td>{formatCurrency(policy.premiumAmount)}</td>

                        <td>

                            <Badge bg={getStatusVariant(policy.status)}>
                                {policy.status}
                            </Badge>

                        </td>

                        <td>

                            <Eye
                                className="me-3 text-primary"
                                role="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => onView(policy.policyId)}
                            />

                            <PencilSquare
                                className="me-3 text-warning"
                                role="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => onEdit(policy.policyId)}
                            />

                            <Trash
                                className="text-danger"
                                role="button"
                                style={{ cursor: "pointer" }}
                                onClick={() => onDelete(policy.policyId)}
                            />

                        </td>

                    </tr>

                ))}

            </tbody>

        </Table>
    );

};

export default PolicyTable;