import { Card, Col, Container, Image, Row } from "react-bootstrap";
import nowayhome from "../assets/images/trending/nowayhome.jpg"
import drstrange2 from "../assets/images/trending/drstrange2.jpg"
import aladdin from "../assets/images/trending/aladdin.jpg"
import kkn from "../assets/images/trending/kkn.jpg"
import civilwar from "../assets/images/trending/civilwar.jpg"
import msmarvel from "../assets/images/trending/msmarvel.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white text-center" id="trending">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={nowayhome} alt="Card Movies" className="images"/>
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">Spiderman : No Way Home</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={drstrange2} alt="Card Movies" className="images"/>
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">Doctor Strange Multiverse Of Madness</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={kkn} alt="Card Movies" className="images" />
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">KKN Desa Penari</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={aladdin} alt="Card Movies" className="images" />
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">Aladdin</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={civilwar} alt="Card Movies" className="images" />
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">Captain America : Civil War</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={msmarvel} alt="Card Movies" className="images" />
              <div className="bg-dark">
                <div className=" text-white m-1 p-2">
                <Card.Title className="text-center">Ms. Marvel</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.  
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Trending