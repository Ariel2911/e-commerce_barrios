import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {  

  return (
    <div className="App">

      <NavBar/>
        
      {/* <ItemListContainer greeting="Detalles del producto"/> */}

      <ItemDetailContainer id={1}/>

    </div>
  );
}

export default App;