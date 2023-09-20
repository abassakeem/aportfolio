import { Col, Container, Row } from "react-bootstrap";
import "./Navbar.css"
const Navbar = () => {
    return ( 
        <Container fluid className="m-0 p-0" data-scroll-section>
            <Row>
                <Col>
                 <div className="navbar d-flex justify-content-between">
                    <div className="menu">Menu</div>
                    <div className="menu">Flirty flowers</div>
                    <div className="menu">Menu</div>
                    
                </div>
                </Col>
            </Row>
        </Container>
       
     );
}
 
export default Navbar;