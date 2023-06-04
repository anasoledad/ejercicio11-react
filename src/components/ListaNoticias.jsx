import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    if (!Array.isArray(noticias) || noticias.length === 0) {
        return <div>No hay noticias disponibles.</div>;
      }
    return (
        < Row className="p-2">
         
            {noticias.map((noticia) => (
        <Noticia key={noticia.id} imagen={noticia.image_url} diario={noticia.diario} titulo={noticia.title} descripcion={noticia.description
        } />
      ))}
            
        </Row>
    );
};

export default ListaNoticias;