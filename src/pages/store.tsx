import storeItems from '../data/items.json';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../component/storeitem';

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((i) => (
          <Col key={i.id}>
            <StoreItem {...i} />{' '}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
