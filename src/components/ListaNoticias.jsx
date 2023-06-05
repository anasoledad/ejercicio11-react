import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    if (!Array.isArray(noticias) || noticias.length === 0) {
        return <div>No hay noticias disponibles.</div>;
      }
    return (
        <Row className="p-2">
      {noticias.map((noticia, index) => (
        <Noticia
          key={index}
          imagen={noticia.urlToImage}
          diario={noticia.author}
          titulo={noticia.title}
          descripcion={noticia.description}
          url={noticia.url}
        />
      ))}
    </Row>
    );
};

export default ListaNoticias;