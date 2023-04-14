import './App.css';
import Arrays from './component/Array/Arrays';
import LinkedList from './component/LinkedList/LinkedList';
import Navbar from './component/NavBar/Navbar';
import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Stack from './component/Stack/Stack';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={'/array'}><Arrays/></Route>
        <Route path={'/linkedlist'}><LinkedList/></Route>
        <Route path={'/stack'}><Stack/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
