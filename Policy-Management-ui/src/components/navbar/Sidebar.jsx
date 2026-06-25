import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  FileText,
  ClipboardCheck,
  BarChart,
  People,
  BoxArrowRight,
} from "react-bootstrap-icons";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-primary text-white p-3 ${
        isOpen ? "d-block" : "d-none d-lg-block"
      }`}
      style={{
        minHeight: "100vh",
        width: "250px",
      }}
    >
      <h4 className="fw-bold mb-4">Policy Management</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-light text-primary rounded fw-bold" : ""
              }`
            }
          >
            <House className="me-2" />
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/policies"
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-light text-primary rounded fw-bold" : ""
              }`
            }
          >
            <FileText className="me-2" />
            Policies
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/claims"
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-light text-primary rounded fw-bold" : ""
              }`
            }
          >
            <ClipboardCheck className="me-2" />
            Claims
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-light text-primary rounded fw-bold" : ""
              }`
            }
          >
            <BarChart className="me-2" />
            Reports
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-light text-primary rounded fw-bold" : ""
              }`
            }
          >
            <People className="me-2" />
            Users
          </NavLink>
        </li>

        <hr className="text-white" />

        <li className="nav-item">
          <NavLink
            to="/logout"
            className="nav-link text-white"
          >
            <BoxArrowRight className="me-2" />
            Logout
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;