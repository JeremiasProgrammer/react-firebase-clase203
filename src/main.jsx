import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";

// import "flowbite";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>
);
