import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
  return (
    <div className="Row">
    <div className="Producto col-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Link to={`/items/${item.id}`} className="btn btn-dark">Producto</Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};