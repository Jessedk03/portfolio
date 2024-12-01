import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {createTheme, MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from "./components/navbar.jsx";

const theme = createTheme({
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
});

createRoot(document.getElementById('root')).render(
    <MantineProvider defaultColorScheme="auto" theme={theme}>
        <StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StrictMode>
    </MantineProvider>,
)
