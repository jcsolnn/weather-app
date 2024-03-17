import { Navbar, Container, Alert } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { CityContext } from '../context/CityContext';

export default function Header() {
  const { error, dispatch } = useContext(CityContext);
  const OPEN_WEATHER_URL = 'https://openweathermap.org/api';

  function handleAlert() {
    dispatch({ type: 'dismiss_error' });
  }
  return (
    <Navbar style={{ background: '#a7dcd6' }}>
      <Container fluid>
        <Navbar.Brand href={OPEN_WEATHER_URL} target='_blank' style={{ color: '#221c35' }}>
          Open Weather App
        </Navbar.Brand>
        {error ? (
          <Alert variant='danger' onClick={handleAlert} dismissible>
            {error}
          </Alert>
        ) : (
          <></>
        )}
        <div className='float-right'>
          <SearchBar />
        </div>
      </Container>
    </Navbar>
  );
}
