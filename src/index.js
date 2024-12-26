import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./components/productList";
import Perkenalan from "./components/perkenalan";
import CounterState from "./components/counterState";
import Form from "./components/form";
import Products from "./data/product";
import ProductCreate from "./components/productCreate";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
    // const [nama, setNama] = useState("");
    // const onCreate = (data) => {
    //     console.log(`ini console dari parent ${JSON.stringify(data.nama)}`);
    //     setNama(data.nama);
    // };

    const [products, setProducts] = useState(Products);
    const onEditProduct = (id, data) => {
        const updatedProduct = products.map((prod) => {
            if (prod.id === id) {
                return { ...prod, ...data };
            }
            return prod;
        });
        setProducts(updatedProduct);
        console.log(products)
    };


    const onCreateProduct = (product) => {
        setProducts([
            ...products,
            { id: Math.round(Math.random() * 123122), ...product },
        ]);
    };

    const onDeleteProduct = (id) => {
        const updatedProduct = products.filter((prod) => {
            return prod.id != id;
        });
        setProducts(updatedProduct);
    };
    return (
        <>
            {/* <Perkenalan name="enzo" hobby="membaca" />
            <Form onCreate={onCreate} />
            <div>{nama}</div>
                <CounterState /> */}
            <div className="app-title">Belanja mobil</div>
            <ProductCreate onCreateProduct={onCreateProduct} />
            <ProductList
                products={products}
                onDeleteProduct={onDeleteProduct}
                onEditProduct={onEditProduct}
            />
        </>
    );
};

root.render(<App />);
