import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => {
    return (
    <Container className='mt-4'>
        <h1 className="text-center">{props.greeting}</h1>
    </Container>
    );
}