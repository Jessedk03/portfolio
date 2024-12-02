import { Navbar } from './Navbar';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from '@mantine/hooks';

export function Layout({ children }) {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <div className="app-layout">
            {isMobile ? (
                <>
                    {/* Mobile Layout: Navbar on top */}
                    <Row className="g-0">
                        <Col className="mobile-navbar">
                            <Navbar />
                        </Col>
                    </Row>
                    {/* Main Content Below */}
                    <Row className="g-0">
                        <Col className="mobile-content">{children}</Col>
                    </Row>
                </>
            ) : (
                <Row className="g-0" style={{ height: "100vh" }}>
                    {/* Desktop Layout */}
                    <Col
                        md={2}
                        className="desktop-navbar border-end"
                        style={{
                            height: "100%",
                        }}
                    >
                        <Navbar />
                    </Col>
                    <Col
                        md={10}
                        className="desktop-content"
                        style={{
                            height: "100%",
                            overflowY: "auto",
                        }}
                    >
                        {children}
                    </Col>
                </Row>
            )}
        </div>
    );
}
