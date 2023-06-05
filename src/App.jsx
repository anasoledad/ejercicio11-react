import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';


function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

  const consultarAPI = async () => {

    let url = '';

    if (categoria === '') {
      url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    } else {
      url = `https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/in.json`;
    }

    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      setNoticias(datos.articles);
    } catch (error) {
      console.log(error);

    }
  };
  

  const handleCategoriaChange = (categoriaSeleccionada) => {
    setCategoria(categoriaSeleccionada);
  };

  return (
    <>
      <Titulo></Titulo>
      <Container className='text-center'>
        <Row className='d-flex justify-content-center'>
          <Col md={10} className='border border-2 p-0'>
            <Formulario handleCategoriaChange={handleCategoriaChange}></Formulario>
            <ListaNoticias noticias={noticias}></ListaNoticias>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
