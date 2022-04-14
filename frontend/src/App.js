import React from 'react';
import { Route,  HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import EditForm from './components/EditForm.jsx';
import Form from './components/Form';
import Header from './components/Header.jsx';
import Home from './components/Home/Home';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';



const App = () => {
  return (
    <Router>
       <Header />
      <div className="App">
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
