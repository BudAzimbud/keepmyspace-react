

const RegisterValidation = (values) => {

    const errors = {};

    if (!values.fullName || values.fullName === "") {
        errors.fullName = "nama lengkap harus diisi";
    }


    if (!values.email || values.email === "") {
        errors.email = "email harus diisi ";
    }

    if (!values.password || values.password === "") {
        errors.password = "password harus di isi";
    }


    if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "password tidak cocok"
    }


    return errors
};

export default RegisterValidation;