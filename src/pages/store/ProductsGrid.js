import React, { useState } from "react";

import ProductItem from "./ProductItem";
import styles from "./ProductsGrid.module.scss";
import { useProducts } from "../../hooks/useProducts";

const ProductsGrid = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [selected, setSelect] = useState("");

  const filterStore =
    search.length === 0
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );

  const filterStoreSelect =
    selected.length === 0
      ? products
      : products.filter((product) =>
          product.category.toLowerCase().includes(selected.toLowerCase())
        );
  const filtered =
    search.length >= 1 || selected.length >= 1
      ? filterStore
      : filterStoreSelect; 
  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-4 pb-5">
          <select
            className="form-select"
            id="exampleSelect1"
            name="name"
            value={selected}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Choose a Category</option>
            <option value="menclothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="womenclothing">Women's Clothing</option>
          </select>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4  pb-5">
          <div className="form-group">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search product"
              className="form-control"
              id="search"
            />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
