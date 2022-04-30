import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>Fadil Film</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#mostViews">MOST VIEWS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar