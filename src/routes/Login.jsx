import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Login = () => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("123123");

    const { loginUser } = useContext(UserContext);
    const navegate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese Constraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar Sesion</button>
            </form>
        </>
    );
};

export default Login;
