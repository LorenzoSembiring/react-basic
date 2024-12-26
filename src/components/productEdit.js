import React from "react";
import { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
    const initialState = {
        nama: product.nama,
        deskripsi: product.deskripsi,
        image: product.imageURL,
    };

    const [formData, setFormData] = useState(initialState);
    const { nama, deskripsi, image } = formData;
    console.log(formData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onEditProduct(product.id, formData)
    };
    const onCancel = () => {
      cancelEdit();
    }
    return (
        <div className="product-edit">
            <div className="edit-title">Edit produk</div>
            <form onSubmit={handleSubmit} action="">
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        type="text"
                        className="edit-input-text"
                        value={nama}
                        name="nama"
                        id=""
                        placeholder="Nama Produk"
                    />
                </div>
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        type="text"
                        className="edit-input-text"
                        value={deskripsi}
                        name="deskripsi"
                        id=""
                        placeholder="Deskripsi Produk"
                    />
                </div>
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        type="text"
                        className="edit-input-text"
                        value={image}
                        name="imageURL"
                        id=""
                        placeholder="image Produk"
                    />
                </div>
                <input
                    type="submit"
                    className="edit-input-submit save"
                    value="save"
                />
                <button onClick={onCancel} className="edit-input-submit cancel">cancel</button>
            </form>
        </div>
    );
};

export default ProductEdit;
