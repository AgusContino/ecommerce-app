import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';

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
