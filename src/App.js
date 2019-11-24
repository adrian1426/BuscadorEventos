import React from 'react';
import Header from './components/Header';
import CategoriaProvider from './context/CategoriaContext';
import Formulario from './components/Formulario';

function App() {
  return (
    <CategoriaProvider>
      <Header/>
      <div className="uk-container">
        <Formulario/>
      </div>
    </CategoriaProvider>
  );
}

export default App;
