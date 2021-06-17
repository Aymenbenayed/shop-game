import React from "react";
import { Link } from "react-router-dom";
import like from "../../Assets/like.png"
/* import "./ProductCard.css" */
/* import { useDispatch } from "react-redux"; */
/* import { addFavorite, updateFavorite } from "../../JS/actions/favorite";
import like1 from "../../Assets/like1.png" */
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdbreact";
import Rating from "../Rating/Rating";
//import { editProduct } from "../../JS/actions/product";

const Product = ({ product, idCategory }) => {
  /* const [likeShow, setLikeShow] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const favorite = useSelector((state) => state.favoriteReducer.favorite);
  const [findFavorite, setFindFavorite] = useState({});

  const dispatch = useDispatch();
  
  const handleLike = () => {
    favorite.length &&
      setFindFavorite(favorite.find((f) => f.favoriteUser._id === user._id));
      console.log(favorite)
    if (!likeShow) {
      dispatch(editProduct(product._id, { rating: product.rating + 1 }));
      !findFavorite
        ? dispatch(
            updateFavorite(user._id, {
              productFavorite: [...findFavorite.productFavorite, product],
            })
          )
        : dispatch(
            addFavorite({ favoriteUser: user._id, productFavorite: [product] })
          );
    } else {
      dispatch(editProduct(product._id, { rating: product.rating - 1 }));
    }
    setLikeShow(!likeShow);
  }; */
  return (


    <div className="cards1">
      {/* <MDBCardImage className="img-fluid" src={`/uploads/${product.fileName`} waves /> */}
      <MDBCol style={{ maxWidth: "18rem" }} className="cards">
        <MDBCard>
          <MDBCardImage
            className="img-fluid w-100"
            src={product.productImage}
            alt="products"
            waves
          />
          {/* width="80%" */}
          <MDBCardBody>
            <MDBCardTitle>
              {product.name.length > 20
                ? product.name.substring(0, 22) + "..."
                : product.name.substring(0, 22)}
            </MDBCardTitle>
            <MDBCardText>
              {product.description.length > 50
                ? product.description.substring(0, 50) + "..."
                : product.description.substring(0, 50)}
            </MDBCardText>
            <Rating value={product.rating} />
            <MDBCardText>
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "tnd",
              })}
            </MDBCardText>
            {product.countInStock === 0 ? (
              <h2>Out of Stock</h2>
            ) : (
              <Link to={`/category/produit/${idCategory}/${product._id}`}>
                <MDBBtn gradient="aqua" className="article">
                  Voir l'article
                </MDBBtn>
              </Link>
            )}
            
             <div className="label-rating">
                <img src={like} alt="like"  /></div>
              {/*{likeShow ? (
                <img src={like1} alt="like" onClick={handleLike} />
              ) : (
                <img src={like} alt="like" onClick={handleLike} />
              )}{" "}
             */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};
export default Product;
