import { Navbar, Container } from 'react-bootstrap';
import AddCityForm from './AddCityForm';
export default function Header() {
  return (
    <Navbar style={{ background: '#f4d06f' }}>
      <Container fluid>
        <Navbar.Brand href='https://openweathermap.org/api'>Open Weather App</Navbar.Brand>
        <div className='float-right'>
          <AddCityForm />
        </div>
      </Container>
    </Navbar>
  );
}
