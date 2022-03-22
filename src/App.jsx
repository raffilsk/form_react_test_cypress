import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();

    if (name.length, cpf.length, email.length, password.length) {
      setList(list.concat({name, cpf, email, password}))
    } else {
      console.error("Preencha todos os dados");
    }

    setName('');
    setCpf('')
    setEmail('')
    setPassword('');
  };

  return (
    <div className="App">
      <h1>Teste de formulário com Cypress</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          data-cy="name"
        />
        <input
          type="number"
          placeholder='Insira seu CPF'
          value={cpf}
          onChange={e => setCpf(Number(e.target.value.slice(0,11)))}
          required
          data-cy="cpf"
          
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          data-cy="email"
        />
        <input
          type="password"
          placeholder='Senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          data-cy="password"
        />
        <button
          type="submit"
          data-cy="submit"
        >
          Cadastrar
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.email} data-cy="table-tr-response">
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default App;
