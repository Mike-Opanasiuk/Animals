import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import './HomeNav.css'

export const HomeNav = () => {
    return (
        <Container className="m-0 p-0 home-nav">
            <Row>
                <Col sm={12} md={10} lg={7}>
                    <Navbar expand="md">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">
                                    <Image src="logo-invert.png" width={"150px"}></Image>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="container justify-content-center pe-0 ps-0">
                                <Nav className="row w-100 text-center">
                                    <NavLink to="/home" className="nav-link ps-0 col-10 col-md-4 text-white align-self-center">Про Нас</NavLink>
                                    <NavLink to="/news" className="nav-link ps-0 col-10 col-md-4 text-white align-self-center">Новини</NavLink>
                                    <NavLink to="/contacts" className="nav-link ps-0 col-10 col-md-4 text-white align-self-center">Контакти</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}