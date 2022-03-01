

const TenantValidation = (values) => {

    const errors = {};


    if (!values.nameTenant || values.nameTenant === "") {
        errors.nameTenant = "Nama Keluarga harus diisi";
    }

    if (!values.city || values.city === "") {
        errors.city = "Kota harus diisi";
    }

    if (!values.province || values.province === "") {
        errors.province = "Provinsi harus diisi";
    }

    if (!values.postalCode || values.postalCode === "") {
        errors.postalCode = "Time zone harus diisi";
    }






    return errors
};

export default TenantValidation;