import { Navbar } from './Navbar';
import { Container } from '@mantine/core';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from '@mantine/hooks';

export function Layout({ children }) {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Container fluid className="app-layout">
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
                <Row className="g-0">
                    {/* Desktop Layout */}
                    <Col md={1} className="desktop-navbar border-end">
                        <Navbar />
                    </Col>
                    <Col md={11} className="desktop-content">
                        {children}
                    </Col>
                </Row>
            )}
        </Container>
    );
}
