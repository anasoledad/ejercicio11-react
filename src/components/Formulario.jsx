import React from 'react';
import {Col, Form, Row } from 'react-bootstrap';

const Formulario = () => {

    return (
          <section className="p-3 bgForm mb-3 text-white border-bottom">
            <Form className="">

              <Form.Group className="mb-3" controlId="">
              <Row>
                <Col md={2}>
                <Form.Label>
                  <strong className='text-dark'>Categorías</strong>
                </Form.Label></Col>
                <Col md={10}>
                <Form.Select

                >
                  <option>Seleccione una categoría</option>
                  <option value="Política">Política</option>
                  <option value="Internacional">Internacional</option>
                  <option value="Economía">Economía</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Deportes">Deportes</option>
                  <option value="Educación">Educación</option>
                  <option value="Entretenimiento">Entretenimiento</option>
                  <option value="Salud">Salud</option>

                </Form.Select></Col>
                </Row>
              </Form.Group>
            </Form>
          </section>


    );
};


export default Formulario;