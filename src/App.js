import React from "react";
import OrderPizza from './OrderPizza';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <Homepage />;
        }}
        />

      <Route 
        path='/pizza'
        render={() => {
          return <OrderPizza />
        }}
        />
    </Router>
  );
};
export default App;
