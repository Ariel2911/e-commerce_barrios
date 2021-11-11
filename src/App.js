import { BrowserRouter,Switch,Route } from 'react-router-dom';
//components
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Contact from './components/contact/contact';
import Cart from './components/cart/cart';
import Error404 from './components/error404/error404';
//context
import {CartProvider} from './context/cartContext';

function App() {  
  return (
    <div className="App">
      <CartProvider>
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

            <Route exact path='/cart'>
              <Cart/>
            </Route>  

            <Route>
              <Error404/>
            </Route>  

          </Switch>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
