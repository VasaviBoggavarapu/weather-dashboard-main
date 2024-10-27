import { Alert } from '@mui/material';
import './index.css';

function ErrorMessage({ error }) {
  return <Alert severity="error">{error}</Alert>;
}

export default ErrorMessage;