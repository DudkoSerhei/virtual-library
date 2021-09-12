import React, { useState } from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  IconButton,
  Paper,
  Tooltip,
} from '@material-ui/core';
import { Visibility, Edit, Delete } from '@material-ui/icons';
import TableHeader from './TableHeader';
import { getComparator, stableSort } from '../helpers';
import { AUTHORS } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: '20px',
    border: `1px solid ${theme.palette.colors.divider}`,
  },
  table: {
    minWidth: 750,
  },
}));

const headCells = [
  { id: 'firstName', align: false, label: 'FirstName', sort: true },
  { id: 'lastName', align: false, label: 'LastName', sort: true },
  { id: 'view', align: true, label: '', sort: false },
  { id: 'edit', align: true, label: '', sort: false },
  { id: 'delete', align: true, label: '', sort: false },
];

const AuthorsTable = () => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className={classes.table}>
            <TableHeader
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(AUTHORS, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((author) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={author.id}>
                    <TableCell component="th" scope="row">
                      {author.firstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {author.lastName}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="View">
                        <IconButton>
                          <Visibility />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={AUTHORS.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default AuthorsTable;
