"use client";

import { FormEvent, useState } from 'react';
import axios from 'axios';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8080/usuarios/cadastro');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return null;
  }
}


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');


  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Header></Header>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label htmlFor="cep">CEP:</label>
          <input
            type="cep"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="endereco"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="telefone"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
                    <label htmlFor="senha">Senha:</label>
          <input
            type="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        <button type="submit">Cadastrar</button>
      </form>
      <Footer></Footer>
    </div>
  );
}
