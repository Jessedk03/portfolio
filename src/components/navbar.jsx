import '../App.css'
import {Burger, Group, NavLink} from "@mantine/core";
import {Row, Col} from "react-bootstrap";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {useEffect, useRef, useState} from "react";
import {LanguageGlobe} from "../assets/svg/globe.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const data = [
    {label: 'Home', href: '/'},
    {label: 'About me', href: '/about'},
    {label: 'Contact', href: '/contact'},
    {label: 'Cv', href: '/cv'},
];

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [opened, {toggle}] = useDisclosure();
    const [active, setActive] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const currentIndex = data.findIndex((item) => item.href === location.pathname);
        if (currentIndex !== -1) {
            setActive(currentIndex);
        }

        if (opened) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [location.pathname, data, opened]);

    const handleClick = (index, href) => {
        setActive(index);
        navigate(href);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            toggle();
        }
    };

    return (
        <>
            <div className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
                <Row>
                    {isMobile ? (
                        <Col>
                            <nav className="p-1 nav-container border-bottom">
                                <Row className={"prevent-overflow"}>
                                    <Col xs={3} className="position-relative relative-parent">
                                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation"/>

                                        {opened && (
                                            <div
                                                ref={menuRef}
                                                className="nav-overlay position-absolute top-100 vw-100"
                                                style={{
                                                    zIndex: 9999,
                                                    backgroundColor: '#fff',
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                    position: "fixed"
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
                                        <NavLink
                                            className={"text-center"}
                                            key={'Portfolio'}
                                            label={'Portfolio website'}
                                            href={"/"}
                                        />
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
                                <Row className="w-100">
                                    <Col xs={6} md={6} lg={6} className="d-flex align-items-center">
                                        <p className={"m-0"}>Portfolio</p>
                                    </Col>
                                    <Col xs={6} md={6} lg={6} className="d-flex align-items-center flex-row-reverse">
                                        <LanguageGlobe color="#707070"/>
                                    </Col>
                                </Row>
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