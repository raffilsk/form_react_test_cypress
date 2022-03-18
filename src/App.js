import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({name: "", lastName: "", cpf: 0 })
  return (
    <div className="App">
      <h1>Teste de formulário com Cypress</h1>
      <form action="">
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Sobrenome'/>
        <input type="number" placeholder='Insira se CPF'/>
        <input type="submit" className='submit' placeholder='Enviar' />
      </form>
    </div>
  );
}

export default App;
