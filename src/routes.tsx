import {createHashRouter, RouterProvider,} from 'react-router-dom'
import {SectionMain} from "./layout/sections/main/Main";
import {Advantages} from "./layout/sections/advantages/Advantages";
import {Ideas} from "./layout/sections/ideas/Ideas";
import {StoneProducts} from "./layout/sections/stoneProducts/StoneProducts";
import {Sale} from "./layout/sections/sales/Sale";
import App from "./App";
import {Catalog} from "./layout/sections/stoneProducts/catalog/Catalog";
import {ErrorPage} from "./components/errorPage/ErrorPage";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                element: <SectionMain />,
                path: '/',
            },
            {
                element: <Advantages />,
                path: '/advantages',
            },
            {
                element: <Ideas />,
                path: '/ideas',
            },
            {
                element: <StoneProducts />,
                path: '/stone-products',
            },

            {
                element: <StoneProducts />,
                path: '/stone-products',
            },
            {
                element: <Sale />,
                path: '/sale',
            },
            {
                element: <Catalog />,
                path: '/catalog',
            }
            ],
    },
]);



export const Router = () => {
    return <RouterProvider router={router} />
}