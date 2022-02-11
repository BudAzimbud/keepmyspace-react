

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



    if (!values.phoneNumber || values.phoneNumber === "") {
        errors.phoneNumber = "no telepon harus di isi";
    }



    return errors
};

export default RegisterValidation;