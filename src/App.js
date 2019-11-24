import React from 'react';
import Header from './components/Header';
import CategoriaProvider from './context/CategoriaContext';

function App() {
  return (
    <CategoriaProvider>
      <Header/>
    </CategoriaProvider>
  );
}

export default App;
