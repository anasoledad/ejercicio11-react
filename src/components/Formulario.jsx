import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Formulario = ({ handleCategoriaChange, handlePaisChange }) => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");

  const noticiasCategoria = (e) => {
    const categoriaSeleccionada = e.target.value;
    setCategoria(categoriaSeleccionada);
    handleCategoriaChange(categoriaSeleccionada);
  };

  const noticiasPais = (e) => {
    const paisSeleccionado = e.target.value;
    setPais(paisSeleccionado);
    handlePaisChange(paisSeleccionado);
  };

  return (
    <section className="p-3 bgForm mb-3 text-white border-bottom">
      <Form className="">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="categoria">
              <Row>
                <Col md={4}>
                  <Form.Label>
                    <strong className="text-dark">Categorías</strong>
                  </Form.Label>
                </Col>
                <Col md={8}>
                  <Form.Select
                    aria-label="categoria"
                    value={categoria}
                    onChange={noticiasCategoria}
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
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="pais">
              <Row>
                <Col md={4}>
                  <Form.Label>
                    <strong className="text-dark">País</strong>
                  </Form.Label>
                </Col>
                <Col md={8}>
                  <Form.Select
                    aria-label="pais"
                    value={pais}
                    onChange={noticiasPais}
                  >
                    <option value="">Seleccione un país</option>
                    <option value="us">USA</option>
                    <option value="ar">Argentina</option>
                    <option value="au">Australia</option>
                    <option value="ru">Rusia</option>
                    <option value="fr">Francia</option>
                    <option value="mx">México</option>
                    <option value="br">Brasil</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default Formulario;
