//import logo from './logo.svg';
import './App.css';
import Blood from './components/Blood';
import Bmi from './components/Bmi';
import Exercise from './components/Exercise';
import Height from './components/Height';
import Home from './components/Home';
import Kcal from './components/Kcal';
import Sleep from './components/Sleep';
import Temp from './components/Temp';
import Water from './components/Water';
import Weight from './components/Weight';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blood" exact component={Blood} />
            <Route path="/bmi" exact component={Bmi} /> 
            <Route path="/exercise" exact component={Exercise} />
            <Route path="/height" exact component={Height} />
            <Route path="/kcal" exact component={Kcal} />
            <Route path="/sleep" exact component={Sleep} />
            <Route path="/temp" exact component={Temp} />
            <Route path="/water" exact component={Water} />
            <Route path="/weight" exact component={Weight} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
