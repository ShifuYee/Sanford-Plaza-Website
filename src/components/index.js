// React
import React, { Component } from 'react';
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom';

// Custom Components
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import SplashScreen from './SplashScreen';
import AppDrawer from './AppDrawer';
import News from './protected/News';
import SalesSublet from './protected/SalesSublet';
import Parking from './protected/Parking';

// Helpers and Constants
import { logout } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';

// Material UI
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )}
    />
  );
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
    open: false,
    tabIndex: 1,
    user: null
  };

  handleTabChange = (value) => {
    this.setState({ tabIndex: value });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: null,
        });
      }
    });
  };

  componentWillUnmount() {
    this.removeListener();
  };

  render() {
    const authButtons = this.state.authed ? (
      <FlatButton
        label="Logout"
        onClick={() => {
          logout();
        }}
        style={{ color: '#fff' }}
      />
    ) : (
      <span>
        <Link to="/login">
          <FlatButton label="Login" style={{ color: '#fff' }} />
        </Link>
      </span>
    );

    return this.state.loading === true ? (
      <SplashScreen />
    ) : (
      <HashRouter>
        <div>
          <AppDrawer
            open={this.state.open}
            handleClose={this.handleClose}
            handleToggle={this.handleToggle}
          />
          <AppBar
            title="Sanford Plaza"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={authButtons}
            iconStyleRight={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0'
            }}
          />
          <div className="container d-flex justify-content-center" >
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home} />
                <PublicRoute
                  authed={this.state.authed}
                  path="/login"
                  component={Login}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/news"
                  component={News}
                  user={this.state.user}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/sales_sublet"
                  component={SalesSublet}
                  user={this.state.user}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/parking"
                  component={Parking}
                  user={this.state.user}
                />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  };
}
