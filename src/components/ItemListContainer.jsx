import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';

import { Item } from "./Item";
import { useProduct } from "../hooks/useProduct";


export const ItemListContainer = (props) => {
    const { id } = useParams()
    const URL = window.location.href
    const type = URL.split('/')
  
    const Allproducts = useProduct({ id , type: type.at(-2) })

    return (
    <Container className='mt-4'>
            <h1 className="text-center">{props.greeting}</h1>
            <div className="d-flex">
            {
            Allproducts.map( item => <Item key={item.id} item={item} /> )
            }
            </div>
    </Container>
    );
};
