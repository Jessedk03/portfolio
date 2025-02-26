import {Routes, Route} from 'react-router-dom';
import {LandingPage} from './pages/landingspage.jsx';
import {AboutPage} from './pages/about.jsx';
import {CVPage} from './pages/cv.jsx';
import {Layout} from "./components/layout.jsx";

export function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/cv" element={<CVPage/>}/>
                </Routes>
            </Layout>
        </>
    )
}

