import React, { createContext, useState } from "react";
import { data } from "../services/data";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(data);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
