import React, { useState, FormEvent } from 'react';

import './styles.css';

import Input from '../../components/Input';
import Select from '../../components/Select';
import { Link } from 'react-router-dom';

function Transaction() {
  const [ operation, setOperation ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ name, setName ] = useState('');

  function handleCreateTransaction(e: FormEvent) {
    e.preventDefault();
    console.log('entruo');
  }

  return (
    <main id="transaction">
      <div>
        <h2 className="transaction-title">Cadastrar Transação</h2>
      </div>
      <form onSubmit={handleCreateTransaction}>
        <Input
          name="price"
          value={price}
          label="Valor:"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Input
          name="price"
          value={name}
          label="Nome da transação:"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <Select
          name="transaction"
          label="Tipo de Transação"
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
          }}
          options={[
            {value: '0', label: 'Receita'},
            {value: '1', label: 'Resultado'},
          ]}
        />
        <button type="submit">
          <Link to="/list-transaction">
            Salvar
          </Link>
        </button>
      </form>
    </main>
  );
}

export default Transaction;