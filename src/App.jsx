 import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import ListaProduto from './components/ListaProduto';
 import FormProduto from './components/FormProduto';
import Fotos from './components/Fotos'

function App() {


  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaProduto/>}/>
        <Route path='/incluir' element={<FormProduto/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/editar/:id' element={<FormProduto/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;


//****Exemplo FOTOS ******* */
//import Fotos from './components/Fotos'
// <Fotos/>






