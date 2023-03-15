import React from "react";
import { useHomePageProducts } from "../redux";

export const HomePage = () => {
  const products = useHomePageProducts();

  return (
    <div>
      
      {products.map((item) => (
        <div key={item._id}>
          <h1> {item.name} </h1>
        </div>
      ))}
    </div>
  );
};
