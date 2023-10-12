import {Route, Switch} from "react-router-dom"
import './App.css';

import NavBar from './components/Navbar';
import Participants from './components/Participants';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={() => <Participants sa={1} />} />
        <Route exact path="/results/single" component={() => <Participants sa={1} />} />
        <Route exact path="/results/average" component={() => <Participants sa={0} />} />
      </Switch>
    </>
  );
}
export default App;