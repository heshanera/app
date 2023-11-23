import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './modules/ProductList';
import { PageWrapper } from './style';

const App: React.FC = () => {
  return (
    <div>
      <PageWrapper>
        <Header />
        <Router>
          <Switch>
            <Route path="/catalog" component={ProductList} />
            <Route path="/catalog/:categoryId" component={ProductList} />
            <Route exact path="/">
              <Redirect to="/catalog" />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </PageWrapper>
    </div>
  );
};

export default App;
