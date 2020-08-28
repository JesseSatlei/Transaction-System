import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import ccyFormat from '../../utils/common';

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

function ccyFormat (num: number) {
  return `${num.toFixed(2)}`;
}

function ListTransaction() {
  const [ informations, setInformations ] = useState();

  useEffect(() => {
    api.get('transaction').then((resp) => {
      setInformations(resp.data)
    })
  }, []);

  function createRow(name: string, transaction: number, balance: number) {
    return { name, balance, transaction };
  }

  // useEffect(() => {
  //   api.get('transaction').then((resp) => {
  //     var info = [];
  //     for (let index = 0; index < resp.data.length; index++) {
  //       info.push(Object.values(resp.data[index]))
  //     }

  //     setInformations(info);
  //   })
  // }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  // function subtotal(items: Row[]) {
  //   return items.map(({ balance }) => balance).reduce((sum, i) => sum + i, 0);
  // }

  // const rows = [
  //   createRow('Paperclips (Box)', 100, 1),
  // ];



  const rows = informations ? informations : [{
    name: "Fulano",
    transaction: 0,
    balance: 0
  }];
  // const total = subtotal(rows);
  // Verificação criada devido ao erro do Sequelize envolvendo Decimal
  function balanceTotal(items: Row[]) {
    return items.map(({ balance, transaction }) => transaction ? balance : balance * -1);
  }
  const total = balanceTotal(rows);
  const teste = total.map((balance: number) => {
    return Number(balance);
  });

  var teste2 = 0;
  for (let index = 0; index < teste.length; index++) {
    teste2 += teste[index];
  }

  console.log(teste2);
// Verificação criada devido ao erro do Sequelize envolvendo Decimal

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
              <TableCell align="right">{teste2}</TableCell>
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


