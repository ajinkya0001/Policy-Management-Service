import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-top py-3 text-center mt-auto">
            <small className="text-muted">
                © {new Date().getFullYear()} Policy Management System | Version
                1.0.0
            </small>
        </footer>
    );
};

export default Footer;