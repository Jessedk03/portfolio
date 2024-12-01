import '../App.css'
import {Burger, Container, Group, NavLink} from "@mantine/core";
import {Row, Col} from "react-bootstrap";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {useState} from "react";

const data = [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Contact' , href: '/contact' },
    { label: 'Cv' , href: '/cv' },
];

export function Navbar() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [opened, {toggle}] = useDisclosure();
    const [active, setActive] = useState(0);

    return (
        <>
            <Container className={isMobile ? 'mobile-navbar' : 'desktop-navbar'}>
                <Row>
                    {isMobile ? (
                        <Col>
                            <nav className={"nav-container"}>
                                <Burger size="md" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>

                                {opened ? (
                                    <Group direction="column" spacing="md">
                                        {data.map((item, index) => (
                                            <NavLink
                                                href={item.href}
                                                key={item.label}
                                                label={item.label}
                                                onClick={() => setActive(index)}
                                            />
                                        ))}
                                    </Group>
                                ) : null}
                            </nav>
                        </Col>
                    ) : (
                        <Col>
                            <nav className="nav-container">
                                <Group direction="column" spacing="md" className={"text-center border-bottom"}>
                                    Title
                                </Group>
                                <div className="ps-2">
                                    {data.map((item, index) => (
                                    <NavLink
                                        href={item.href}
                                        key={item.label}
                                        active={index === active}
                                        label={item.label}
                                        onClick={() => setActive(index)}
                                    />
                                    ))}
                                </div>
                            </nav>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}