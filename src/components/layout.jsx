import {Navbar} from './Navbar';
import {Col, Row} from 'react-bootstrap';
import {useMediaQuery} from '@mantine/hooks';

export function Layout({children}) {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <div className="app-layout">
            {isMobile ? (
                <>
                    {/* Mobile Layout: Navbar on top */}
                    <Row className="g-0">
                        <Col className="mobile-navbar">
                            <Navbar/>
                        </Col>
                    </Row>
                    {/* Main Content Below */}
                    <Row className="g-0">
                        <Col className="mobile-content">{children}</Col>
                    </Row>
                </>
            ) : (
                <Row className={"g-0"} style={{height: "100vh"}}>
                    {/* Desktop Layout */}
                    <div
                        className="desktop-navbar border-end"
                        style={{
                            width: "15%",
                            height: "100%",
                        }}
                    >
                        <Navbar/>
                    </div>
                    <div
                        className="desktop-content"
                        style={{
                            width: "85%",
                            height: "100%",
                            overflowY: "auto",
                        }}
                    >
                        {children}
                    </div>
                </Row>
            )}
        </div>
    );
}
