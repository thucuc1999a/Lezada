import React from 'react';
import DetailProductPage from './DetailProductPage';
import {Switch, Route,useRouteMatch} from 'react-router-dom';
import ShopFeature from './../../Shop/pages';
function DetailProductFeature(props) {
    const path  = useRouteMatch().path;
    return (
       <>
       <Switch>
       <Route path={path} components={ShopFeature}  exact/>
       <Route path={`/:id`} components={DetailProductPage}  exact/>

       
       </Switch>
       </>
    );
}

export default DetailProductFeature;