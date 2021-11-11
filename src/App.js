
import "./App.scss";
import { Route, Switch, Redirect,BrowserRouter} from "react-router-dom";

import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

import HomeFeature from "./app/features/Home/pages";
import ShopFeature from "./app/features/Shop/pages";
import DetailProductPage  from "./app/features/DetailProduct/pages/DetailProductPage";
//import Auth from "./app/features/Auth";
//import RegisterForm from "./app/features/Authen/RegisterForm";
//import Register from "./app/features/Authen/Register";
import AuthenPage from "./app/features/Authen";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="body-content">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/shop" component={ShopFeature} exact />
          <Route path="/" component={HomeFeature}  exact/>         
          <Route path="/products/:id" component={DetailProductPage} exact />
          <Route path="/authen" component={AuthenPage}  exact/>   
        
        </Switch>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
