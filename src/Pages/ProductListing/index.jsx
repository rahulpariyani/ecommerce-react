import React, { useEffect, useState } from "react";
import { productServices } from "../../services";
import classes from "./index.module.scss";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  increaseProductQty,
  decreaseProductQty,
} from "../../store/slices/product.slice";

const ProductListing = () => {
  const [productList, setProductList] = useState([]);
  const [visibleProductCount, setVisibleProductCount] = useState(9);
  const cartProductList = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const fetchProductList = async () => {
    const products = await productServices.fetchProducts();
    setProductList(products);
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const threshold = 200; 
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - threshold
    ) {
      loadMoreProducts();
    }
  }

  const loadMoreProducts = () => {
    setVisibleProductCount((prevCount) => prevCount + 3);
  };
  const getVisibleProducts = () => {
    return productList.slice(0, visibleProductCount)
  };

  const getProductfromRedux=(id)=>{
    return cartProductList.findIndex((product) => product.id === id);
  }
  const addToCartHandler = (product) => {
    const { id } = product;
    const index = getProductfromRedux(id);
    if (index !== -1) {
      increaseProdQty(id);
    } else {
      dispatch(addProductToCart({ ...product, qty: 1 }));
    }
  };
  const getProductQty=(id)=>{
    const temp = cartProductList.find((item)=>item.id===id)
    return temp?.qty??0
    
  }
  const increaseProdQty=(id)=>{
  dispatch(increaseProductQty({ id, quantity: 1 }));
}
  const decreaseProdQty=(id)=>{
  dispatch(decreaseProductQty({ id, quantity: 1 }));
}
const isDisabledProduct=(id)=>{
  const temp = getProductQty(id)
  console.log('temp :', temp);
  return !temp
}

  const renderCustomCardBody = (product) => {
    const { id, description } = product;
    return (
      <div className={classes.cardBody}>
        <div className={classes.description}>{description}</div>
        <div className={classes.buttonWrapper}>
          <Button onClick={() => addToCartHandler(product)}>add to cart</Button>
          <Button onClick={()=>{decreaseProdQty(id)}} disabled={isDisabledProduct(id)}>-</Button>
        <p>{getProductQty(id)}</p>
        <Button onClick={()=>{addToCartHandler(product)}}>+</Button>
        </div>
      </div>
    );
  };
  return (
    <section className={classes.container}>
      {getVisibleProducts().map((product) => {
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
      })}
    </section>
  );
};

export default ProductListing;
