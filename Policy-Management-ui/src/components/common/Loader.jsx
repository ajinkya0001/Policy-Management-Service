import { Spinner } from "react-bootstrap";

const Loader = () => {

    return (

        <div className="text-center p-5">

            <Spinner animation="border" />

            <p className="mt-3">
                Loading...
            </p>

        </div>

    );

};

export default Loader;