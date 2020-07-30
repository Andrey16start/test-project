import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./scenes/MainPage/MainPage";
import NotFound from "./scenes/NotFound/NotFound";
import useDidMount from "./hooks/useDidMount";
import Navbar from "./containers/Navbar/Navbar";
import LoginPage from "./scenes/LoginPage/LoginPage";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./containers/Footer/Footer";
import Profile from "./scenes/Profile/Profile";
import News from "./scenes/News/News";
import { getCurrentUser } from "./ducks/user";


const PrivateRoutes = (props) => {
  const [isPagePending, setPagePending] = useState(true);

  useDidMount(() => {
    if (!localStorage.isLoggedIn) {
      props.history.push('/login');
    }
    else {
      props.getCurrentUser();
      setPagePending(false);
    }
  });

  if (isPagePending) {
    return (
      <div className="global-pending">
        <Spinner spinnerSize={70} />
      </div>
    )
  }

  return (
    <div className="main-page">
      <Navbar />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/news" component={News} />
        <Route exact path="/profile" component={Profile} />

        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  getCurrentUser,
};

const ConnectedPrivateRoute = connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);


const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />

      <PrivateRoute
        path="/"
        component={ConnectedPrivateRoute}
        isAuthenticated={!!localStorage.isLoggedIn}
      />

      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;