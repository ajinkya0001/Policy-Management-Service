import { Card } from "react-bootstrap";

const DashboardCard = ({ title, value, bgColor }) => {

    return (
        <Card
            className="shadow-sm border-0 h-100"
            style={{
                borderLeft: `5px solid ${bgColor}`
            }}
        >
            <Card.Body>

                <h6 className="text-muted">
                    {title}
                </h6>

                <h2 className="fw-bold">
                    {value}
                </h2>

            </Card.Body>

            <Card
                className="shadow-sm border-0 h-100"
                style={{
                    transition: "0.3s",
                    cursor: "pointer"
                }}
            ></Card>
        </Card>
    );

};

export default DashboardCard;