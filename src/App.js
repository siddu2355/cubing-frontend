import {Route, Switch, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Participants from './components/Participants';
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Participants sa={1} />} />
        <Route exact path="/results/single" component={() => <Participants sa={1} />} />
        <Route exact path="/results/average" component={() => <Participants sa={0} />} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </>
  );
}
export default App;