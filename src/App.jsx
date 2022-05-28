import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import Login from './views/Login/Login';
import styles from './App.css';


export default function App() {
  

  return (
    <>
      <Header />
      <Router>
        <Switch>

          <Route path='/main'>
            <Main />
          </Route>

          <Route path='/'>
            <Login />
          </Route>

        </Switch>
      </Router>
    </>
  );
}
