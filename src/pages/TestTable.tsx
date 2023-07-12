import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Stack, Typography } from '@mui/material';

function createData(trackingNo: number, productName: string, totalOrder: number, status: string, totalAmount: number) {
  return { trackingNo, productName, totalOrder, status, totalAmount };
}

const rows = [
  createData(3256498, 'keyboard', 125, 'Rejected', 70999),
  createData(13256498, 'Computer Accessories', 100, 'Approved', 70999),
  createData(23256498, 'Camera Lens', 40, 'Rejected', 70999),
  createData(33256498, 'TV', 335, 'Pending', 70999),
  createData(43256498, 'Handset', 100, 'Approved', 70999),
  createData(53256498, 'Mouse', 70, 'Rejected', 70999),
  createData(63256498, 'Desktop', 85, 'Approved', 70999),
  createData(73256498, 'Chair', 90, 'Pending', 70999),
  createData(83256498, 'Mobile', 110, 'Approved', 70999),
  createData(93256498, 'Laptop', 70, 'Pending', 70999)
];

const TestTable = () => {
  return (
    <TableContainer component={Paper} sx={{ display: 'flex', flexDirection: 'column', m: '2rem auto', width: '90%' }}>
      <Table sx={{ minWidth: 400 }}>
        <TableHead sx={{ background: '#fafafa' }}>
          <TableRow sx={{ '& .css-1ygcj2i-MuiTableCell-root': { color: '#2d2d2d' } }}>
            <TableCell align="center">TRACKING NO.</TableCell>
            <TableCell align="center">PRODUCT NAME</TableCell>
            <TableCell align="center">TOTAL ORDER</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">TOTAL AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.trackingNo} sx={{ '& .css-kys057-MuiTableCell-root.tracking__no': { color: '#d3d3d3' } }}>
              <TableCell sx={{ minWidth: '200px' }} className="tracking__no" align="center">
                {row.trackingNo}
              </TableCell>
              <TableCell sx={{ minWidth: '200px' }} align="center">
                {row.productName}
              </TableCell>
              <TableCell sx={{ minWidth: '200px' }} align="center">
                {row.totalOrder}
              </TableCell>

              <TableCell sx={{ minWidth: '200px' }} align="center">
                <Stack direction="row" spacing={0.6} alignItems="center">
                  <Box
                    sx={{
                      background: `${row.status === 'Approved' ? 'green' : row.status === 'Pending' ? 'yellow' : 'red'}`,
                      borderRadius: '50%',
                      width: '10px',
                      height: '10px'
                    }}
                  />
                  <Typography>{row.status}</Typography>
                </Stack>
              </TableCell>
              <TableCell sx={{ minWidth: '200px' }} align="center">
                {row.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
