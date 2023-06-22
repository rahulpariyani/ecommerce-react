import React from "react";
import classes from "./index.module.scss";

const ProductCard = (props) => {
  const { image, title, price, renderCustomBody } = props;

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <img src={image} className={classes.image} />
        <aside className={classes.details}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price}>${price}</div>
        </aside>
      </header>
      <div className={classes.seperator} />
      {renderCustomBody()}
    </section>
  );
};

export default ProductCard;
