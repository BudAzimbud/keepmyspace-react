

const ValidateFormAsset = (values) => {

    const errors = {};


    if (!values.assetName || values.assetName === "") {
        errors.assetName = "Nama Harta harus di isi"
    }

    if (!values.price || values.price === "") {
        errors.price = "Harga harus di isi"
    }

    if (!values.note || values.note === "") {
        errors.note = "Catatan harus di isi"
    }

    if (!values.address || values.address === "") {
        errors.address = "Alamat harus di Isi"
    }

    if (!values.certification || values.certification === "") {
        errors.certification = "Nomer Sertifikat harus di isi"
    }


    if (!values.sizeBuilding || values.sizeBuilding === "") {
        errors.sizeBuilding = "Luas Bangunan harus di isi"
    }

    if (!values.sizeSoil || values.sizeSoil === "") {
        errors.sizeSoil = "Luas Tanah us di isi"
    }

    if (!values.paid || values.paid === "Pilih Pelunasan") {
        values.paid = "Pilih Pelunasan"
    }



    return errors
};

export default ValidateFormAsset;