import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importa biblioteca para criação das tabelas
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './styles.css';
import api from '../../services/api';

interface Row {
  name: string;
  transaction: number;
  balance: number;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
}

function ListTransaction() {
  const [ informations, setInformations ] = useState();
  // Trás todas as informações referente a transações
  useEffect(() => {
    api.get('transaction').then((resp) => {
      setInformations(resp.data)
    })
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  // Seta um valor inicial, caso não exista transações no banco;
  const rows = informations ? informations : [{
    name: "Fulano",
    transaction: 0,
    balance: 0
  }];

  // Verificação criada devido ao erro do Sequelize envolvendo trazer um Decimal como String
  function transformedInNumber(items: Row[]) {
    return items.map(({ balance, transaction }) => transaction ? balance : balance * -1);
  }
  const totalTransaformed = transformedInNumber(rows);
  const totalTransformedInNumber = totalTransaformed.map((balance: number) => {
    return Number(balance);
  });

  var total = 0;
  for (let index = 0; index < totalTransformedInNumber.length; index++) {
    total += totalTransformedInNumber[index];
  }

  const classes = useStyles();

  return (
    <main className="container" id="list-transaction">
      <div>
        <h2 className="transaction-title">Relatório de Transações</h2>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Detalhes
              </TableCell>
              <TableCell align="right">Balanço</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nome: </TableCell>
              <TableCell align="right">Tipo de Transação</TableCell>
              <TableCell align="right">Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: Row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{ row.transaction ? 'Receita' : 'Resultado'}</TableCell>
                <TableCell align="right">{ row.transaction ? row.balance + ' +' : row.balance + ' -'}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={1}>Total: </TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/transaction">
        Voltar
      </Link>
    </main>
  );
}

export default ListTransaction;


