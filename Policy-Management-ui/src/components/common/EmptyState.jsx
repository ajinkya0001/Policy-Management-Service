const EmptyState = ({ message }) => {

    return (

        <div className="text-center p-5">

            <h4>No Data Found</h4>

            <p>{message}</p>

        </div>

    );

};

export default EmptyState;