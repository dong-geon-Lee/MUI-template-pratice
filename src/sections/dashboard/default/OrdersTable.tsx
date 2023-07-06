import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// 패키지는 공식문서를 찾아보는게 중요하다! 똑같이 해서 안되면 사용법이 달라진 것이니 명심하자!ㄴ
import { NumericFormat } from 'react-number-format';

interface Data {
  name: string;
  carbs: number;
  fat: number;
  tracking_no: number;
  protein: number;
}

// 특정 문자열을 조건으로 타입을 선언한점이 특이하다.
type Order = 'asc' | 'desc';

interface OrderTableHeadProps {
  order: Order;
  orderBy: string;
}

// keyof A → A의 모든 프로퍼티의 키값을 union 형태로 반환
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  align: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
}

// a.localeCompare(b)일때
// a가 b보다 전에 오면 -(음수)
// a가 b보다 후에 오면 +(양수)
// 같으면 0
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// 객체의 속성을 제약할 떄 사용된다. (공식문서)
// 삼항연산자로 함수를 이용하는것은 흥미로운 패턴이다!
//  내가 생각했던 sort((a,b) => a - b)가 여기서 적용된거구나
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [A in Key]: number | string }, b: { [B in Key]: number | string }) => number {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// 타입스크립트 튜플을 map에서 사용하는 방법이다 주로 as를 쓰는군
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function createData(tracking_no: number, name: string, fat: number, carbs: number, protein: number): Data {
  return { tracking_no, name, fat, carbs, protein };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 0, 14001)
];

// readonly는 const 와 비슷하다.삭제 할 수없게 만든다. 변경할 일이 없다는 뜻이다.
const headCells: readonly HeadCell[] = [
  {
    id: 'tracking_no',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Total Order'
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Total Amount'
  }
];

/* 더미데이터 headCells에서 label이 테이블의 카테고리 이름을 지정하고 있다. 
key는 더미 id align은 TableCell에 빌트인 된 속성이고 그 값을 map으로 편리하게
렌더링 하고 있는걸 알수 있다. 즉 TableCell은 4개의 빌트인 된 속성이 사용됨을 확인 할 수 있다. 
또한 useState와 order, orderBy를 이용해서 해당 컴포넌트와 리액트 상태를 삼항 연산자를 이용해서 
테이블 UI를 변경시키고 있다는 것을 알 수 있다. 
*/
function OrderTableHead({ order, orderBy }: OrderTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const OrdersTable = () => {
  const [order] = useState<Order>('asc');
  const [orderBy] = useState<keyof Data>('tracking_no');

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.tracking_no}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="left">{/* OrderStatus */}</TableCell>

                  <TableCell align="right">
                    <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersTable;
