import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import { useDispatch } from 'react-redux';
import { alertSuccess, alertError } from './redux/actions';

function App() {

  const dispatch = useDispatch();
  const handleSuccess = () => {
    dispatch(alertSuccess ("SUCCESS!"));
  }
  const handleError = () => {
    dispatch(alertError ("ERROR"));
  }

  return (
      <div style={{textAlign: 'center'}}>
        <Alert></Alert>
        <button style={{backgroundColor: '#0DDE0D', width: '100px', height: '30px', margin: '8px', cursor: 'pointer'}} onClick = {handleSuccess}>
          Success
        </button>
        <button style={{backgroundColor: '#F9390D', width: '100px',height: '30px', margin: '8px',  cursor: 'pointer'}} onClick = {handleError}>
          Fail
        </button>
      </div>
  );
}

export default App;
