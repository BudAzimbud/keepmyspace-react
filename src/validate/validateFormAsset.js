

const ValidateFormAsset = (values) => {

    const errors = {};


    if (!values.assetName || values.assetName === "") {
        errors.assetName = "Nama Harta harus di isi"
    }

    if (!values.value || values.value === "") {
        errors.value = "Harga harus di isi"
    }

    if (!values.note || values.note === "") {
        errors.note = "Catatan harus di isi"
    }

    if (!values.detailaddress || values.detailaddress === "") {
        errors.addredetailaddressss = "Alamat harus di Isi"
    }

    if (!values.detailcertification || values.detailcertification === "") {
        errors.detailcertification = "Nomer Sertifikat harus di isi"
    }


    if (!values.detailsizeSoil || values.detailsizeSoil === "") {
        errors.detailsizeSoil = "Luas Bangunan harus di isi"
    }

    if (!values.detailsizeBuilding || values.detailsizeBuilding === "") {
        errors.detailsizeBuilding = "Luas Tanah harus di isi"
    }


    if (!values.detailbrand || values.detailbrand === "") {
        errors.detailbrand = "Merek harus di isi"
    }
    if (!values.detailnumberplat || values.detailnumberplat === "") {
        errors.detailnumberplat = "Merek harus di isi"
    }

    if (!values.detailnumbermachine || values.detailnumbermachine === "") {
        errors.detailnumbermachine = "Nomer Mesin harus di isi"
    }

    if (!values.detailpaid || values.detailpaid === "") {
        errors.detailpaid = "Silahkan pilih"
    }

    return errors
};

export default ValidateFormAsset;