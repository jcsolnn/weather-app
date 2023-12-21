import { Navbar, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <Navbar style={{ background: '#a7dcd6' }}>
      <Container fluid>
        <Navbar.Brand href='https://openweathermap.org/api' target='_blank' style={{ color: '#221c35' }}>
          Open Weather App
        </Navbar.Brand>
        <div className='float-right'>
          <SearchBar />
        </div>
      </Container>
    </Navbar>
  );
}
