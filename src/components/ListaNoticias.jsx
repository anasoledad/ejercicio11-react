import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    // if (noticias.length === 0) {
    //     return let url = `https://saurav.tech/NewsAPI/top-headlines/in.json`
    //   }
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