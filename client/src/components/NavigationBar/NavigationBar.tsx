import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import HeaderNavLinkProps, { HeaderNavLink } from "../HeaderNavLink/HeaderNavLink"
import React, { useEffect } from "react"

export interface NavigationBarProps {
    logo: string,
    linksColor: string,
    links: HeaderNavLinkProps[]
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ logo, links, linksColor }) => {

    // TODO: Replace by more efficient code
    useEffect(() => {
        const el = document.querySelector(".navbar-toggler-icon");
        const els = document.querySelectorAll(".nav-link");
        if (window.location.pathname == "/") {
            el?.classList.add("icon-inverted");
            els.forEach(e => e.classList.remove("nav-link-inverted"));
            return;
        }
        el?.classList.remove("icon-inverted");
        els.forEach(e => e.classList.add("nav-link-inverted"));
    }, []);

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