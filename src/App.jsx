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
  const [pais, setPais] = useState('');

  useEffect(() => {
    consultarAPI();
  }, [categoria, pais]);

  const consultarAPI = async () => {

    let urlCategoria = '';
    let urlPais = '';

    if (categoria === '') {
      urlCategoria = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    } else {
      urlCategoria = `https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/${pais}.json`;
    }
    if (pais === '') {
      urlPais = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    } else {
      urlPais = `https://saurav.tech/NewsAPI/top-headlines/country/${pais}/${categoria}.json`;
    }

    try {
      const respuesta = await fetch(urlCategoria || urlPais);
      const datos = await respuesta.json();
      setNoticias(datos.articles);
    } catch (error) {
      console.log(error);

    }
  };
  

  const handleCategoriaChange = (categoriaSeleccionada) => {
    setCategoria(categoriaSeleccionada);
  };
  const handlePaisChange = (paisSeleccionado) => {
    setPais(paisSeleccionado);
  };

  return (
    <>
      <Titulo></Titulo>
      <Container className='text-center'>
        <Row className='d-flex justify-content-center'>
          <Col md={10} className='border border-2 p-0'>
            <Formulario handleCategoriaChange={handleCategoriaChange} handlePaisChange={handlePaisChange}></Formulario>
            <ListaNoticias noticias={noticias}></ListaNoticias>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
