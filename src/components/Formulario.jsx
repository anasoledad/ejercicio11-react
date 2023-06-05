import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Formulario = ({ handleCategoriaChange }) => {
  const [categoria, setCategoria] = useState('');

  const handleChange = (e) => {
    const categoriaSeleccionada = e.target.value;
    setCategoria(categoriaSeleccionada);
    handleCategoriaChange(categoriaSeleccionada);
  };

  return (
    <section className="p-3 bgForm mb-3 text-white border-bottom">
      <Form className="">
        <Form.Group className="mb-3" controlId="">
          <Row>
            <Col md={2}>
              <Form.Label>
                <strong className="text-dark">Categorías</strong>
              </Form.Label>
            </Col>
            <Col md={10}>
              <Form.Select
                aria-label="categoria"
                value={categoria}
                onChange={handleChange}
              >
                <option value="">Seleccione una categoría</option>
                <option value="business">Negocios</option>
                <option value="general">General</option>
                <option value="technology">Tecnología</option>
                <option value="sports">Deportes</option>
                <option value="science">Ciencia</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;