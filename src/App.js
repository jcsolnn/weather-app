import './App.css';
import Header from './components/Header';
import { Container, Row } from 'react-bootstrap';
import WeatherDetails from './components/WeatherDetails';
import Cities from './components/Cities';
import { useContext } from 'react';
import { CityContext } from './context/CityContext';

function App() {
  const { selectedCity } = useContext(CityContext);

  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row className='py-lg-4' style={{ backgroundColor: '#fff8f0' }}>
        {selectedCity ? <WeatherDetails /> : <p>No details to show ...</p>}
      </Row>
      <Row className='py-lg-2'>
        <Cities />
      </Row>
    </Container>
  );
}

export default App;
