import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Productos from './components/Productos/Productos';

function App() {
   return (
      <div className="App">

         <header>
            <Navbar />
         </header>
         
         <ItemListContainer saludo="¡Bienvenidos a Lunatica!" />
         <Productos />

      </div>
   );
}

export default App;
