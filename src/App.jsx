import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

import { useContext } from "react";
import RequireAuth from "./components/RequireAuth";
import { UserContext } from "./context/UserProvider";

const App = () => {
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
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </>
    );
};

export default App;
