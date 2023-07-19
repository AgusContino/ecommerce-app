import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
   return (
      <div className="App">

         <BrowserRouter>

            <header>
               <Navbar />
            </header>

            <Routes>
               <Route path="/" element={<ItemListContainer saludo="¡Bienvenidos a Lunatica!" />} />
               <Route path="/product/:id" element={<ItemDetailContainer />} />
            </Routes>

         </BrowserRouter>

      </div>
   );
}

export default App;
