import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Location } from "history";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";

const Routes: React.FC = () => {
  const location = useLocation<{ background?: Location<{} | null> }>();
  const background = location.state?.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/categories/:id" exact>
          <CategoryProducts />
        </Route>
      </Switch>
      {background && (
        <Route path="/detail/:productId" exact>
          <ProductDetail />
        </Route>
      )}
    </>
  );
};

export default Routes;
