import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (

        <div className="text-center mt-5">

            <h1>404</h1>

            <h3>Page Not Found</h3>

            <Button
                onClick={() => navigate("/")}
            >
                Back to Dashboard
            </Button>

        </div>

    );

};

export default NotFound;