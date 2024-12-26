import React from "react";
import { useState } from "react";
import "../App.css";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import ProductEdit from "./productEdit";

const ProductCard = ({ products, onDeleteProduct, onEditProduct }) => {
    const [productCounter, setProductCounter] = useState(0);
    const [showEdit, setShowEdit] = useState(false);
    const increment = () => {
        setProductCounter(productCounter + 1);
    };
    const decrement = () => {
        setProductCounter(productCounter - 1);
    };
    const handleSubmit = (id, data) => {
        setShowEdit(!showEdit);
        onEditProduct(id, data)
    }
    const cancelEdit = () => {
        setShowEdit(false)
    }
    return (
        <div className="card">
            {showEdit ? (
                <ProductEdit product={products} cancelEdit={cancelEdit} onEditProduct={handleSubmit}/>
            ) : (
                <>
                    <div className="edit-delete">
                        <GoPencil onClick={() => {setShowEdit(!showEdit);}} className="icon-edit" />
                        <FaTrashAlt
                            onClick={()=> {onDeleteProduct(products.id)}}
                            className="icon-delete"
                        />
                    </div>
                    <img
                        style={{
                            width: "100%",
                            height: "200px",
                            borderRadius: "10px 10px 0px 0px",
                        }}
                        src={products.imageURL}
                        alt=""
                    />
                    <div className="container">
                        <h4>
                            <b>{products.nama}</b>
                        </h4>
                        <p>{products.deskripsi}</p>
                    </div>
                    <div
                        className={`card-keranjang ${
                            productCounter > 0
                                ? "jumlah-product"
                                : "show-keranjang"
                        }`}
                    >
                        {!productCounter == 0 ? (
                            <>
                                <button onClick={decrement} className="button">
                                    -
                                </button>
                                <div>{productCounter}</div>
                                <button onClick={increment} className="button">
                                    +
                                </button>
                            </>
                        ) : (
                            <div onClick={increment}> + keranjang</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCard;
