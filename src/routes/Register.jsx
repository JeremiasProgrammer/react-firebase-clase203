import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

const Register = () => {
    const navegate = useNavigate();
    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validateTrim, validateEquals } =
        formValidate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setError,
    } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password);
            navegate("/");
        } catch (error) {
            setError("firebase", {
                message: erroresFirebase(error.code),
            });
        }
    };

    return (
        <>
            <h1>Register</h1>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                >
                    <FormError error={errors.email} />
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Ingrese Password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim,
                    })}
                >
                    <FormError error={errors.password} />
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Ingrese Password"
                    {...register("repassword", {
                        validate: validateEquals(getValues),
                    })}
                >
                    <FormError error={errors.repassword} />
                </FormInput>

                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
