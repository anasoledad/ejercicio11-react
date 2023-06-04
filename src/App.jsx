import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';


function App() {

  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState([]);

  useEffect(()=>{
      consultarAPI();
  }, [])

  const consultarAPI = async () =>{
    try{
      const respuesta = await fetch('https://newsdata.io/api/1/news?apikey=pub_239727a2fb5d93de7f61a62c1f8a61fe8b1da');
      const dato = await respuesta.json()
      console.log(respuesta);
      console.log(dato.results);
      const noticiasFiltradas = dato.results.filter(
        (noticia) => noticia.image_url !== null && noticia.languaje === 'es'
      );
  
      setNoticias(noticiasFiltradas);
    }catch (error){
      console.log(error);
    }
  }


  return (
    <>
      <Titulo></Titulo>
      <Container  className='text-center'>
        <Row  className='d-flex justify-content-center'>
        <Col md={10} className='border border-2 p-0'>
        <Formulario></Formulario>
      <ListaNoticias noticias = {noticias}></ListaNoticias>
        </Col>
        </Row>

      </Container>

    </>
  )
}

export default App
