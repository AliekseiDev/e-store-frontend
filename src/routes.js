import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from '$hoc/Layout';
import Phones from '$containers/Pages/Phones';
import Phone from '$containers/Pages/Phone';
import Basket from '$containers/Pages/Basket';
import NotFound from '$containers/Pages/NotFound';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Phones}/>
        <Route path="/phones/:id" exact component={Phone}/>
        <Route path="/basket" exact component={Basket}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  );
};

export default Routes;