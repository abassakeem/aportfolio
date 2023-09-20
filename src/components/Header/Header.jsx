import { Col, Container, Row } from "react-bootstrap";
import SplitText from "../../utils/Split3.min.js"
import gsap from "gsap"
import "./Header.css"
import { useEffect } from "react";
const Header = () => {
  useEffect(()=>{
    const split= new SplitText("#header-text",{
      type: "lines",
      linesClass: 'lineChildren'
    })
    const splitParent= new SplitText("#header-text",{
      type: "lines",
      linesClass: 'lineParent'
    })

    gsap.to(split.lines, {
      duration: 1,
      y:0,
      opacity:1,
      stagger:0.1,
      ease: "power2",
    })
  },[])
    return ( 
        <div className="header-container vh-100" data-scroll-section>
             <Container fluid className="m-0 p-0">
            <Row>
                <Col>
                 <div className="header ">
                  <ul className="header-menu">
                    <li>Intro</li>
                    <li>About</li>
                    <li>Featured</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                    
                  </ul>
                  <h1 id="header-text">Lanre Abass</h1>
                    
                </div>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Header;
