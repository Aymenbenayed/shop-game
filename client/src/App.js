/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "./JS/actions/user";
import Error from "./pages/Error/Error";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignUp/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./pages/Navbar/Navbar"
import Footer  from './pages/Footer/Footer'
import Categorie from "./pages/Categorie/CategorieCard"
import Contact from "./pages/Contact/Contact"
import EditUser from "./pages/EditUser/EditUser"
import ProductList from "./pages/Products/ProductList";
import ProductScreen from "./pages/Products/ProductDetails/ProductScreen"
import CartScreen from "./pages/Cart/CartScreen"
import Admindashboard from "./pages/Admin/Admindashboard/Admindashboard"
import Admincategories from "./pages/Admin/categories/Admincategories"
import Adminproducts from "./pages/Admin/products/adminproducts"
import Adminusers from "./pages/Admin/users/adminusers"
import Addcategory from "./pages/Admin/categories/addcategory"
import Addproduct from "./pages/Admin/products/Addproduct"
import EditCategory from "./pages/Admin/categories/Editcategory";
import EdittUsers from "./pages/Admin/users/edit"
import PrivateRoute from "./router/PrivateRoute";
import PrivateRouteAdmin from "./router/PrivateRouteAdmin"
import "./App.css";
import Editproduct from "./pages/Admin/products/editproduct";
import Recipt from "./pages/Cart/Recipt/Recipt";

import SousCategoryList from "./pages/Categorie/SousCategory/SousCategoryList";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

return (
  <div className="App">
    <Navbar />
      <Switch>
      {/* <Route exact path="/souscatList/id" component={SouscatList} /> */}
      <Route exact path="/category/soucat/:idd" component={SousCategoryList} />
          <Route exact path="/" component={LandPage} /> 
          <Route path="/contact" component={Contact} />    
          {/* <Route path="/Message" component={Message} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/Categorie" component={Categorie} />
          <Route exact path="/category/produit/:id/:idd" component={ProductScreen }/>
          <Route exact path="/prd" component={ProductScreen} />
          <Route exact path="/category/produit/:id" component={ProductList }/>
          
          
          {/* routes user  */}

          <PrivateRoute exact path="/cart" component={CartScreen} />
          <PrivateRoute path="/edit" component={EditUser} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <PrivateRoute exact path="/Recipt" component={Recipt}/>

          {/*  routes admin  */}

          <PrivateRouteAdmin exact path="/Admindashboard" component={Admindashboard} />
          <PrivateRouteAdmin exact path="/Admindashboard/Admincategories" component={Admincategories} />
          <PrivateRouteAdmin exact path="/Admindashboard/Adminproducts" component={Adminproducts} />
          <PrivateRouteAdmin exact path="/Admindashboard/Adminusers" component={Adminusers} />
          <PrivateRouteAdmin exact path="/Admindashboard/Admincategories/Addcategory" component={Addcategory} />
          <PrivateRouteAdmin exact path="/Admindashboard/Adminproducts/Addproduct" component={Addproduct} />
          <PrivateRouteAdmin exact path="/Admindashboard/Admincategories/EditCategory/:id" component={EditCategory} />
          <PrivateRouteAdmin exact path="/Admindashboard/Adminproducts/Editproduct/:id" component={Editproduct} />
          <PrivateRouteAdmin exact path="/cart" component={CartScreen} />
          <PrivateRouteAdmin exact path="/Admindashboard/Adminusers/EditUsers/:id" component={EdittUsers} />
          <Route path="/*" component={Error} />
      </Switch>
    <Footer />
    </div>
  );}
  
export default App;