import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Foot/Foot';
import Header from './components/Header/Header';
import Login from './views/Login/Login';
import Main from './views/Main/Main';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/main">
            <Main />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
