import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import { useForm } from "react-hook-form";

const Login = () => {
    const navegate = useNavigate();
    const { registerUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            console.log("Usuario creado");
            navegate("/");
        } catch (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("email", {
                        message: "Usuario ya registrado",
                    });
                    break;
                case "auth/invalid-email":
                    setError("email", {
                        message: "Formato email no válido",
                    });
                    break;
                default:
                    console.log("Ocurrio un error en el server");
            }
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "campo obligatorio",
                        },
                        pattern: {
                            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                            message: "formato de email incorrecto",
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    type="password"
                    placeholder="Ingrese Password"
                    {...register("password", {
                        setvalueas: (v) => v.trim(),
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 carácteres",
                        },
                        validate: {
                            trim: (v) => {
                                if (!v.trim()) {
                                    return "Porfavor escriba una contraseña";
                                }
                                return true;
                            },
                        },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
