import React from 'react';
import './style.css';
import { GetInfo } from '..';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const renderRows = (result) =>{
  return result ? result.map(r =><tr><td>{r.name}</td><td>{<GetInfo repo={r.full_name} />}</td></tr>):""
}


export default function Result ({ result }) {
    return (
        <div style={{ width: '100%' }}>
            <TableContainer component={Paper} sx={{ maxWidth: 500 }} style={{ width: 400, margin: 'auto' }}>
                <Table sx={{ maxWidth: 500 }} aria-label="simple table" style={{ width: 400, margin: 'auto' }}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align= "center">Name</StyledTableCell>
                            <StyledTableCell align= "center">Info</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody  >
                        {renderRows(result)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
