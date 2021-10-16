import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>

      <ItemListContainer greeting="Detalles del producto"/>
      
      <main className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
