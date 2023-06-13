import {MainPage} from "../pages/MainPage";
import {FavouritesPage} from "../pages/FavouritesPage";
import {ClothPage} from "../pages/ClothPage";
import {ContactPage} from "../pages/ContactPage";
import {CatalogPage} from "../pages/CatalogPage";

export const routes = [
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/favourites",
        element: <FavouritesPage/>
    },
    {
        path: `/cloth/:clothId`,
        element: <ClothPage/>
    },
    {
        path: '/contacts',
        element: <ContactPage/>
    },
    {
        path: '/catalog',
        element: <CatalogPage/>
    }
];
