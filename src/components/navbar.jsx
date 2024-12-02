import '../App.css'
import {Burger, Container, Group, NavLink} from "@mantine/core";
import {Row, Col} from "react-bootstrap";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {useState} from "react";

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

    return (
        <>
            <div className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
                <Row>
                    {isMobile ? (
                        <Col>
                            <nav className="p-1 nav-container border-bottom">
                                <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                                Portfolio website
                                {opened ? (
                                    <div className="nav-overlay">
                                        {data.map((item, index) => (
                                            <NavLink
                                                href={item.href}
                                                key={item.label}
                                                label={item.label}
                                                onClick={() => setActive(index)}
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </nav>
                        </Col>
                    ) : (
                        <Col>
                            <Group direction="column" className={"py-2 border-bottom text-center d-flex"}>
                                <p className={"m-0"}>Portfolio</p>
                            </Group>
                            {data.map((item, index) => (
                                <NavLink
                                    href={item.href}
                                    key={item.label}
                                    active={index === active}
                                    label={item.label}
                                    onClick={() => setActive(index)}
                                />
                            ))}
                        </Col>
                    )}
                </Row>
            </div>
        </>
    )
}