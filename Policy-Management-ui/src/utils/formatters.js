export const getStatusVariant = (status) => {

    switch (status) {

        case "ACTIVE":
            return "success";

        case "INACTIVE":
            return "secondary";

        case "PENDING":
            return "warning";

        case "EXPIRED":
            return "danger";

        default:
            return "dark";

    }

};

export const formatCurrency = (amount) => {

    return new Intl.NumberFormat("en-IN", {

        style: "currency",

        currency: "INR"

    }).format(amount);

};