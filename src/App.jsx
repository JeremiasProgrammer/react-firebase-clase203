import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

import { useContext } from "react";
import LayoutContainerForm from "./components/LayoutContainerForm";
import RequireAuth from "./components/RequireAuth";
import { UserContext } from "./context/UserProvider";

const App = () => {
    <Link
        href="./output.css"
        rel="stylesheet"
    />;

    const { user } = useContext(UserContext);

    if (user === false) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<RequireAuth />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                </Route>

                <Route
                    path="/"
                    element={<LayoutContainerForm />}
                >
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default App;
