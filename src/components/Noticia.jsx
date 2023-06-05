import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';


const Noticia = ({imagen, diario, titulo, descripcion, url}) => {
  return (
    <Col md={4} className=" mb-3">
      <Card className='h-100'>
      <Card.Img variant="top" src={imagen} alt={titulo} />
        <h6 className='text-start ps-3'>{diario}</h6>
        <Card.Body className='d-block justify-content-start'>
          <Card.Title className='text-start'>{titulo}</Card.Title>
          <Card.Text className='text-start'>
            {descripcion}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <Button href={url} variant="primary">Ver noticia completa</Button>
          </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
