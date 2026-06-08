import { Navbar } from "./navbar.jsx";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "@mantine/hooks";
import { useLocation } from "react-router-dom";

export function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const location = useLocation();
  const hideMenu =
    location.pathname &&
    location.pathname.startsWith("/honours/personal_leadership");

  return (
    <div className="app-layout">
      {isMobile ? (
        <>
          {/* Mobile Layout: Navbar on top (hidden when applicable) */}
          {!hideMenu && (
            <Row className="g-0">
              <Col className="mobile-navbar">
                <Navbar />
              </Col>
            </Row>
          )}
          {/* Main Content Below */}
          <Row className="g-0">
            <Col className="mobile-content">{children}</Col>
          </Row>
        </>
      ) : // Desktop: if hideMenu, render content full width
      hideMenu ? (
        <Row className={"g-0"} style={{ height: "100vh" }}>
          <div
            className="desktop-content"
            style={{
              width: "100%",
              height: "100%",
              overflowY: "auto",
            }}
          >
            {children}
          </div>
        </Row>
      ) : (
        <Row className={"g-0"} style={{ height: "100vh" }}>
          {/* Desktop Layout */}
          <div
            className="desktop-navbar border-end"
            style={{
              width: "15%",
              height: "100%",
            }}
          >
            <Navbar />
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
