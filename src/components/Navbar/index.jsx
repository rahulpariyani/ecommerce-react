import React from "react";
import classes from "./index.module.scss";
import { navs } from "./constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../../assets/img/cart.png";

const Navbar = () => {
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products);

  const redirectionHandler = (path) => {
    navigate(path);
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.logo} onClick={() => redirectionHandler("/")}>
          Ecommerce App
        </div>
        <div className={classes.nav_items}>
          {navs.map((nav) => {
            const { name, path, id } = nav;
            return (
              <div
                className={classes.nav}
                onClick={() => redirectionHandler(path)}
                key={id}
              >
                {name}
              </div>
            );
          })}
          <div
            className={classes.cartWrapper}
            onClick={() => redirectionHandler("/cart")}
          >
            <img src={Cart} className={classes.cartImg} />{" "}
            <span className={classes.productCount}>{productList.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
