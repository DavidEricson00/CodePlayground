import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [mail, setMail] = useState('');

  function formSubmit(e) {
    e.preventDefault();
    setNome('');
    setIdade(0);
    setMail('');
    console.log('Nome: ', nome);
    console.log('Idade: ', idade);
    console.log('Email: ', mail);
  }

  function isFormValid() {
    if(nome.trim() == '') {
      return false;
    }
    if(idade < 0) {
      return false;
    }
    if(mail.trim() == '') {
      return false;
    }

    return true
  }

  return (
    <>
    <h1>Formulário de Inscrição para Maratona</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input value={nome} id='nome' type='text' onChange={(e) => setNome(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='age'>Idade</label>
          <input value={idade} id='age' type='number' onChange={(e) => setIdade(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='mail'>Email</label>
          <input value={mail} id='mail' type='mail' onChange={(e) => setMail(e.target.value)}></input>
        </div>
        <input id='enviar' type='submit' disabled={!isFormValid()}/>
      </form>
    </>
  )
}

export default App
