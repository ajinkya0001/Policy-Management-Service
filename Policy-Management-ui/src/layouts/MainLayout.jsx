import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "../components/navbar/Header";
import Sidebar from "../components/navbar/Sidebar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (

        <div className="d-flex flex-column min-vh-100">

            <Header toggleSidebar={toggleSidebar} />

            <Container fluid className="flex-grow-1">

                <Row>

                    <Col
                        lg={2}
                        className="p-0"
                    >
                        <Sidebar isOpen={isSidebarOpen} />
                    </Col>

                    <Col
                        lg={10}
                        className="bg-light p-4"
                    >
                        <Outlet />
                    </Col>

                </Row>

            </Container>

            <Footer />

        </div>

    );
};

export default MainLayout;