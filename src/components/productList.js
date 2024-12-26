import React from "react";
import ProductCard from "./productCard";
import Products from "../data/product";

const ProductList = ({products, onDeleteProduct, onEditProduct}) => {
    return (
        <div className="cards">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        products = {product}
                        onDeleteProduct={onDeleteProduct}
                        onEditProduct={onEditProduct}
                    />
                ))}
            </div>
    )
}

export default ProductList;