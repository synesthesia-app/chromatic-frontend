import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import Footer from './components/Foot/Foot';
import Login from './views/Login/Login';
import styles from './App.css';

export default function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>

          <Route path="/"><Login /></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
