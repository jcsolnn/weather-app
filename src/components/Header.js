import { Navbar, Container } from 'react-bootstrap';
import AddCityForm from './AddCityForm';
export default function Header(props) {
  return (
    <Navbar style={{ background: '#a7dcd6' }}>
      <Container fluid>
        <Navbar.Brand href='https://openweathermap.org/api' style={{ color: '#221c35' }}>
          Open Weather App
        </Navbar.Brand>
        <div className='float-right'>
          <AddCityForm onSubmit={props.formSubmit} />
        </div>
      </Container>
    </Navbar>
  );
}
