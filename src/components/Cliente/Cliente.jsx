
import React, { useState } from 'react';

const Cliente =()=>{
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
  
    const handleNomeChange = (event) => {
      setNome(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Nome: ${nome}, Email: ${email}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={handleNomeChange} 
            placeholder="Digite seu nome" 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Digite seu email" 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
export default Cliente