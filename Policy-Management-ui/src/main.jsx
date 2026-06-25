// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

// import App from "./App";

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/variables.css";
import "./assets/styles/global.css";
import "./assets/styles/custom.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);