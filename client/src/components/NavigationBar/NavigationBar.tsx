import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import HeaderNavLinkProps, { HeaderNavLink } from "../HeaderNavLink/HeaderNavLink"

export interface NavigationBarProps {
    logo: string,
    linksColor: string,
    links: HeaderNavLinkProps[]
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ logo, links, linksColor }) => {
    return (
        <Container className="m-0 p-0 home-nav">
            <Row>
                <Col sm={12} md={10} lg={7}>
                    <Navbar expand="md">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">
                                    <Image src={logo} width={"150px"}></Image>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="container justify-content-center pe-0 ps-0">
                                <Nav className="row w-100 text-center">
                                    {
                                        links.map((l, ind) =>
                                            <HeaderNavLink key={ind} linkRoute={l.linkRoute} linkTitle={l.linkTitle} textColor={linksColor}></HeaderNavLink>
                                        )
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}