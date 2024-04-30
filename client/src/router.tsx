import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />}>
            </Route>
            <Route index element={<HomePage />}></Route>
        </>
    )
)