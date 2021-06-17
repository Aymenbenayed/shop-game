import React from "react";
import ScrollToTop from "react-scroll-to-top";
import CategoriesList from "./Categorie/CategoriesList";
import ProductListLandPage from "./Products/ProductListLandPage/ProductListLand";
import CarouselPage from "./Carousel/CarouselPage";
import samsung1 from "../Assets/samsung.png";
import nitendo from "../Assets/Nintendo.png";
import sony from "../Assets/sony.png";
import "./LandPages.css";

const LandPage = () => {
  return (
    <div className="LandPage">
      <ScrollToTop smooth />
      <CarouselPage />
      <h2>
        Boutique Officielle Just For Games Site de Vente en Ligne <br />
        de Jeux Vidéo, Consoles & Accessoires
      </h2>
      <CategoriesList />
      <ProductListLandPage />
      <div className="grandsmarque">
        <img className="marque samsung" src={samsung1} alt="samsung" />
        <img className="marque nitendo" src={nitendo} alt="nitendo" />
        <img className="marque sony" src={sony} alt="sony" />
        <img className="marque samsung" src={samsung1} alt="samsung" />
        {/* <img classname="marque microsoft" src={xbox} alt="microsoft" /> */}
      </div>
    </div>
  );
};

export default LandPage;
