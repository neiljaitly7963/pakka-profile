import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Table.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({wordsArray}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wordsArray.map((word) => (
            <TableRow key={word}>
              <TableCell component="th" scope="row">
                {word}
              </TableCell>
              <TableCell align="right"><div className="circle"><span className="count">{word.length}</span></div></TableCell>
              <TableCell align="right"><Button>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

