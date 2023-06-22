import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
