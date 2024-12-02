import '../App.css'
import {Burger, Group, NavLink} from "@mantine/core";
import {Row, Col} from "react-bootstrap";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {useEffect, useState} from "react";
import {LanguageGlobe} from "../assets/svg/globe.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const data = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'},
    {label: 'Cv', href: '/cv'},
];

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [opened, {toggle}] = useDisclosure();
    const [active, setActive] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const currentIndex = data.findIndex((item) => item.href === location.pathname);
        if (currentIndex !== -1) {
            setActive(currentIndex);
        }
    }, [location.pathname, data]);

    const handleClick = (index, href) => {
        setActive(index);
        navigate(href);
    };

    return (
        <>
            <div className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
                <Row>
                    {isMobile ? (
                        <Col>
                            <nav className="p-1 nav-container border-bottom">
                                <Row>
                                    <Col xs={3} className="position-relative">
                                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation"/>

                                        {opened && (
                                            <div
                                                className="nav-overlay position-absolute top-100 vw-100"
                                                style={{
                                                    zIndex: 9999,
                                                    backgroundColor: '#fff',
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                {data.map((item, index) => (
                                                    <NavLink
                                                        key={item.label}
                                                        active={index === active}
                                                        label={item.label}
                                                        onClick={() => handleClick(index, item.href)}
                                                        className="d-block p-2"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </Col>
                                    <Col xs={6} className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">Portfolio Website</div>
                                    </Col>
                                    <Col xs={3} className="d-flex justify-content-end align-items-center">
                                        <LanguageGlobe color="#707070"/>
                                    </Col>
                                </Row>
                            </nav>
                        </Col>

                    ) : (
                        <Col>
                            <Group direction="column" className={"py-2 border-bottom text-center d-flex"}>
                                <p className={"m-0"}>Portfolio</p>
                                <LanguageGlobe color="#707070"/>
                            </Group>
                            {data.map((item, index) => (
                                <NavLink
                                    key={item.label}
                                    active={index === active}
                                    label={item.label}
                                    onClick={() => handleClick(index, item.href)}
                                />
                            ))}
                        </Col>
                    )}
                </Row>
            </div>
        </>
    )
}