import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  return (
    <>
      <Titulo></Titulo>
      <Container  className='text-center'>
        <Row  className='d-flex justify-content-center'>
        <Col md={10} className='border border-2 p-0'>
        <Formulario></Formulario>
      <ListaNoticias></ListaNoticias>
        </Col>
        </Row>

      </Container>

    </>
  )
}

export default App
