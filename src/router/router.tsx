import {MainPage} from "../pages/MainPage";
import {FavouritesPage} from "../pages/FavouritesPage";

export const routes = [
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/favourites",
        element: <FavouritesPage/>
    }
];
