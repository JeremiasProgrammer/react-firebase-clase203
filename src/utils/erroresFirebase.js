export const erroresFirebase = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
            return { code: "email", message: "Usuario ya registrado" };

        case "auth/invalid-email":
            return { code: "email", message: "Formato email no válido" };

        case "auth/invalid-email-verified":
            return { code: "email", message: "El email no está verificado" };

        case "auth/invalid-password":
            return {
                code: "password",
                message: "Contraseña mínimo 6 carácteres",
            };
        case "auth/invalid-login-credentials":
            return {
                code: "email",
                message: "Revise si el correo o contraseña están bien escritos",
            };

        case "auth/user-not-found":
            return { code: "email", message: "Usuario no registrado" };

        case "auth/wrong-password":
            return { code: "password", message: "Contraseña incorrecta" };

        default:
            return { code: "email", message: "Error, intentelo más tarde" };
    }
};
