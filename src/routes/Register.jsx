import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("123123");

    const navegate = useNavigate();

    const { registerUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <>
            <h1>Register</h1>
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
                <button type="submit">Registrarse</button>
            </form>
        </>
    );
};

export default Register;
