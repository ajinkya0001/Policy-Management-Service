import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import DashboardCard from "../components/dashboard/DashboardCard";
import dashboardService from "../services/dashboardService";

const Home = () => {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await dashboardService.getDashboardStatistics();

            setDashboard(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );

    }

    return (

        <>

            <h2 className="mb-4">
                Dashboard
            </h2>

            <Row className="g-4">

                <Col md={4}>

                    <DashboardCard
                        title="Total Policies"
                        value={dashboard.totalPolicies}
                        bgColor="#0d6efd"
                    />

                </Col>

                <Col md={4}>

                    <DashboardCard
                        title="Active Policies"
                        value={dashboard.activePolicies}
                        bgColor="#198754"
                    />

                </Col>

                <Col md={4}>

                    <DashboardCard
                        title="Inactive Policies"
                        value={dashboard.inactivePolicies}
                        bgColor="#dc3545"
                    />

                </Col>

            </Row>

        </>

    );

};

export default Home;