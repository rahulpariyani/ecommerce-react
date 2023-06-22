import React, { useEffect, useState } from "react";
import { productServices } from "../../services";
import classes from "./index.module.scss";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  increaseProductQty,
  decreaseProductQty,
} from "../../store/slices/product.slice";
import ErrorScreen from "../../components/ErrorScreen";

const Cart = () => {
  const productList = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };
  const handleIncreaseQty = (id) => {
    dispatch(increaseProductQty({ id, quantity: 1 }));
  };
  const handleDecreaseQty = (id) => {
    dispatch(decreaseProductQty({ id, quantity: 1 }));
  };

  const renderCustomCardBody = (product) => {
    const { id, qty } = product;
    return (
      <div className={classes.cardBody}>
        <Button
          onClick={() => handleRemoveProduct(id)}
          className={classes.removeBtn}
        >
          Remove
        </Button>
        <Button onClick={() => handleDecreaseQty(id)}>-</Button>
        <p>{qty}</p>
        <Button onClick={() => handleIncreaseQty(id)}>+</Button>
      </div>
    );
  };
  const renderProducts = () => {
    return productList.map((product) => {
      const { id, title, image, description, price } = product;
      return (
        <ProductCard
          title={title}
          image={image}
          price={price}
          renderCustomBody={() => renderCustomCardBody(product)}
          key={id}
        />
      );
    });
  };
  return (
    <section className={classes.container}>
      {productList.length ? (
        renderProducts()
      ) : (
        <ErrorScreen message="Please add items in cart!" />
      )}
    </section>
  );
};

export default Cart;
