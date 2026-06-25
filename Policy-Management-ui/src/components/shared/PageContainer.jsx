import { Card } from "react-bootstrap";

const PageContainer = ({ title, actions, children }) => {

    return (

        <Card
            className="shadow-sm border-0 rounded-4"
        >

            <Card.Body className="p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-0">
                            {title}
                        </h2>

                    </div>

                    <div>

                        {actions}

                    </div>

                </div>

                {children}

            </Card.Body>

        </Card>

    );

};

export default PageContainer;