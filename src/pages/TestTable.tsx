import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Stack, Typography } from '@mui/material';

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
    <TableContainer component={Paper} sx={{ mt: '2rem' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: '#fafafa' }}>
          <TableRow>
            <TableCell>TRACKING NO.</TableCell>
            <TableCell>PRODUCT NAME</TableCell>
            <TableCell>TOTAL ORDER</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>TOTAL AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.trackingNo}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.totalOrder}</TableCell>
              <TableCell>
                <Grid container gap={1} alignItems="center">
                  <Box
                    sx={{
                      background: row.status === 'Approved' ? 'green' : row.status === 'Pending' ? 'yellow' : 'red',
                      width: '10px',
                      height: '10px',
                      borderRadius: '1rem'
                    }}
                  />
                  {row.status}
                </Grid>
              </TableCell>
              <TableCell>$ {row.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
