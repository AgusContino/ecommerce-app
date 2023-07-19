import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
   return (
      <div className="App">

         <header>
            <Navbar />
         </header>
         
         <ItemListContainer saludo="¡Bienvenidos a Lunatica!" />

      </div>
   );
}

export default App;
