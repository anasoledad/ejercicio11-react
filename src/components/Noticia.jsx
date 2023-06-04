import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const Noticia = () => {
  return (
    <Col md={6} className=" mb-3">
      <Card>
        <Card.Img variant="top" src="https://s1.eestatic.com/2023/06/01/elandroidelibre/moviles-android/analisis/768183371_233678906_1200x630.jpg" />
        <h6 className='text-start ps-3'>diario z</h6>
        <Card.Body className='d-block justify-content-start'>
          <Card.Title className='text-start'>Título de Noticia</Card.Title>
          <Card.Text className='text-start'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ver noticia completa</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
