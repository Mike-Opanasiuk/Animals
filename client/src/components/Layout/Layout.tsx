import { Container } from "react-bootstrap"
import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"

export const Layout = () => {
    return (
        <Container className="d-flex flex-column" style={{ "height": "100vh"}}>

            <Header></Header>

            <main className="flex-fill mt-3 mb-3">
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
            
        </Container>
    )
}