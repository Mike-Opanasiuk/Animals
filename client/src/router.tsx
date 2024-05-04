import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />}>
                <Route path='/about' element={<AboutPage/>}></Route>
            </Route>
            <Route index element={<HomePage />}></Route>
        </>
    )
)