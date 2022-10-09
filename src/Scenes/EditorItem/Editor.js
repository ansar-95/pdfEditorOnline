import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/HeaderItem/Header';
import './editor.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

function Editor() {
  return (
    <div>
      <Header/>
      <h1>Editor Pdf</h1>

      <Container>
          <Row className="justify-content-md-center mt-3">
            <Col xs lg="2">
            <Button variant="danger" className=''>Import  pdf</Button>
            </Col>
            
          </Row>
      </Container>  
        
    

    </div>
  );
}

export default Editor;