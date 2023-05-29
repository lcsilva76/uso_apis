 import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import ListaProduto from './components/ListaProduto';
 import FormProduto from './components/FormProduto';


function App() {


  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaProduto/>}/>
        <Route path='/incluir' element={<FormProduto/>}/>
        <Route path='/editar/:id' element={<FormProduto/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;


//****Exemplo FOTOS ******* */
//import Fotos from './components/Fotos'
// <Fotos/>





//****Exemplo Posts ******* */
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import ListarPostagem from './components/ListarPostagem';
// import FormPostagem from './components/FormPostagem';

//     <BrowserRouter>
//      <Routes>
//        <Route path='/' element={<ListarPostagem/>}/>
//        <Route path='/incluir' element={<FormPostagem/>}/>
//        <Route path='/editar/:id' element={<FormPostagem/>}/>
//      </Routes>
//      </BrowserRouter>

