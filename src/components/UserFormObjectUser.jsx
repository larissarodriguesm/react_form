import React, { useState } from "react";
import { LabelForm } from "./LabelForm";

export const UserFormObjectUser = () => {
const [user, setUser] = useState({
  nome: '',
  email:'',
  senha:''
});


    const submitForm = (event) => {
        event.preventDefault()
        console.log('submit', nome)
    }

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>

      <form className="form" onSubmit={submitForm}>
        <div className="col-md-4 mb-3">
          <LabelForm name="Nome" />
          {/* <label htmlFor="nome" className="form-label">Nome</label> */}
          <input 
            type="text" 
            name="nome" 
            id="nome" 
            className="form-control" 
            onChange={(event) => setUser({...user, nome: event.target.value})}
            value={user.nome}
          />
        </div>

        <div className="col-md-4 mb-3">
          <LabelForm name="Email" />
          {/* <label htmlFor="email" className="form-label" >Email</label>/ */}
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="form-control" 
            onChange={(event) => setUser({...user, email: event.target.value})}
            value={user.email}
          />
        </div>

        <div className="col-md-4 mb-3">
          <LabelForm name="Senha" />
          {/* <label htmlFor="senha" className="form-label">Senha</label> */}
          <input 
            type="password" 
            name="senha" 
            id="senha" 
            className="form-control" 
            onChange={(event) => setUser({...user, senha: event.target.value})}
            value={user.senha}
          />
        </div>

        <button type="submit" className="btn btn-info btn-sm">
          Enviar
        </button>
      </form>
    </div>
  );
};
