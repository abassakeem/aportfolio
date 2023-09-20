import { Col, Container, Image, Row } from "react-bootstrap";

import {
    faPhp,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faSquareGithub,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



  
import "./Featured.css"
const Featured = () => {
   
    return ( <div className="featured-container" data-scroll-section>
        
        <Container fluid>

        
        <Row>

        
            <Col>
            <div className="featured-section">
                <div className="">
                    <Container fluid>
                        <Row className="vh-100 d-flex align-items-center justify-content-around">
                            <div  className=" stage-decagon-cont">
                             
           


                                    <div class="decagon-spinner" data-scroll>
                                    <div class="face face1">L</div>
                                    <div class="face face2">A</div>
                                    <div class="face face3">N</div>
                                    <div class="face face4">R</div>
                                    <div class="face face5">E</div>
                                    <div class="face face6">A</div>
                                    <div class="face face7">B</div>
                                    <div class="face face8">A</div>
                                    <div class="face face9">S</div>
                                    <div class="face face10">S</div>
                                    
                                </div>
                            </div>

                
                            <Col sm="6" className=" stage-cube-cont ">
                            <div className="cubespinner" data-scroll>
                            <div className="face-cube face1-cube ">
                            <FontAwesomeIcon icon={faPhp} color="#ee4047" />
                            </div>
                            <div className="face-cube face2-cube">
                            <FontAwesomeIcon icon={faHtml5} color="#333" />
                            </div>
                            <div className="face-cube face3-cube">
                            <FontAwesomeIcon icon={faCss3} color="#ee4047" />
                            </div>
                            <div className="face-cube face4-cube">
                            <FontAwesomeIcon icon={faReact} color="#333" />
                            </div>
                            <div className="face-cube face5-cube">
                            <FontAwesomeIcon icon={faJsSquare} color="#ee4047" />
                            </div>
                            <div className="face-cube face6-cube">
                            <FontAwesomeIcon icon={faGitAlt} color="#333" />
                            </div>
                        </div>
                            </Col>
                           
                        </Row>
                    </Container>
                   
                </div>
            </div>
            
            </Col>
        </Row>
        </Container>
    </div> );
}
 
export default Featured;