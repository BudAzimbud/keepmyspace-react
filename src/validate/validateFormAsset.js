

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
        errors.detailsizeBuilding = "Luas Tanah us di isi"
    }

    if (!values.detailpaid || values.detailpaid === "Pilih Pelunasan") {
        values.detailpaid = "Pilih Pelunasan"
    }



    return errors
};

export default ValidateFormAsset;