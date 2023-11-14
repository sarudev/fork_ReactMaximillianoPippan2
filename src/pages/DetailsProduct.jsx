import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useProduct } from "../hooks/useProduct";

export function DetailsProduct() {
    const { id } = useParams()
    const Allproducts = useProduct({ id })

    return (
        <Container className='mt-4'>
            <h1>{Allproducts.title}</h1>
            <p>{Allproducts.description}</p>
            <p>{Allproducts.price}</p>
            <img src={Allproducts.imagen} alt={Allproducts.title} />
        </Container>
    );
}
