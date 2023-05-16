import './App.css'
import {Header} from "./components/UI/Header";
import {routes} from "./router/router.tsx";
import {useRoutes} from "react-router-dom";
import {Footer} from "./components/UI/Footer";

function App() {

    const app = useRoutes(routes)

    return (
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
            <Header/>
            {app}
            <Footer/>
        </div>
    )
}

export default App
