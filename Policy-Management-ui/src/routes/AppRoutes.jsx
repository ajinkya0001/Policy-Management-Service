import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import PolicyList from "../pages/PolicyList";
import AddPolicy from "../pages/AddPolicy";
import EditPolicy from "../pages/EditPolicy";
import PolicyDetails from "../pages/PolicyDetails";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route
                        path="policies"
                        element={<PolicyList />}
                    />

                    <Route
                        path="policies/add"
                        element={<AddPolicy />}
                    />

                    <Route
                        path="policies/edit/:id"
                        element={<EditPolicy />}
                    />

                    <Route
                        path="policies/:id"
                        element={<PolicyDetails />}
                    />

                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;