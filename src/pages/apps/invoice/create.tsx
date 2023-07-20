import { useNavigate } from 'react-router';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import * as yup from 'yup';
import { v4 as UIDV4 } from 'uuid';
import { format } from 'date-fns';
import { FieldArray, Form, Formik } from 'formik';

import MainCard from 'components/MainCard';
// import InvoiceItem from 'sections/apps/invoice/InvoiceItem';
// import AddressModal from 'sections/apps/invoice/AddressModal';
// import InvoiceModal from 'sections/apps/invoice/InvoiceModal';

// import incrementer from 'utils/incrementer';
import { useDispatch, useSelector } from 'store';
// import { openSnackbar } from 'store/reducers/snackbar';
// import {
//   customerPopup,
//   toggleCustomerPopup,
//   selectCountry,
//   getInvoiceInsert,
//   reviewInvoicePopup,
//   getInvoiceList
// } from 'store/reducers/invoice';

import { EditOutlined, PlusOutlined } from '@ant-design/icons';

// import { CountryType, InvoiceList } from 'types/invoice';

const validationSchema = yup.object({
  date: yup.date().required('Invoice date is required'),
  due_date: yup
    .date()
    .required('Due date is required')
    .when('date', (date, schema) => date && schema.min(date, "Due date can't be before invoice date"))
    .nullable(),
  customerInfo: yup
    .object({
      name: yup.string().required('Invoice receiver information is required')
    })
    .required('Invoice receiver information is required'),
  status: yup.string().required('Status selection is required'),
  invoice_detail: yup
    .array()
    .required('Invoice details is required')
    .of(yup.object().shape({ name: yup.string().required('Product name is required') }))
    .min(1, 'Invoice must have at least 1 items')
});

const Create = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // useSelector((state => state.invoice))

  return <div>Creatsdfdse</div>;
};

export default Create;
