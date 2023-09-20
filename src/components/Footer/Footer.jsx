import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"
import SectionHeader from "../About/SectionHeader/SectionHeader";
const Footer = () => {
    return ( 
        <Container data-scroll-section>
            <Row>
                <Col>
                 <div className="footer-container d-flex align-items-center justify-content-center flex-column">
                        <SectionHeader title="Contact me" />
                        <h1 className="location text-center" id="loaction-text">
                            Abass
                        </h1>
                </div> 
                </Col>
            </Row>
        </Container>
     ) ;
}
 
export default Footer;