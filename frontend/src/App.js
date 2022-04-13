//import logo from './logo.svg';
import './App.css';
import EditForm from './components/EditForm.jsx';
import Form from './components/Form';
import Header from './components/Header.jsx';
import Home from './components/Home/Home';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <Header />
      <div class="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={Form} />
            <Route path="/edit/:id" component={EditForm} />
            <Route path="/create" component={SignIn} />
            <Route path="/user" component={SignUp} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
