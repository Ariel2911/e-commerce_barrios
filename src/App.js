import { BrowserRouter,Switch,Route } from 'react-router-dom';

import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Contact from './components/contact/contact';
import Error404 from './components/error404/error404';

function App() {  

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>

        <Switch>

          <Route exact path='/'>
            <ItemListContainer greeting="Productos"/>
          </Route>

          <Route exact path='/category/:id'>
            <ItemListContainer greeting="Productos"/>
          </Route>

          <Route path='/item/:id'>
            <ItemDetailContainer/>
          </Route>  

          <Route exact path='/contact'>
            <Contact/>
          </Route>  

          <Route>
            <Error404/>
          </Route>  

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
