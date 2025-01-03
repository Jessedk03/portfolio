import {useState} from "react";
import {Badge, Button, Card, Container, Group, Image, Modal, Text, Title} from "@mantine/core";
import {Col, Row} from "react-bootstrap";

import invoice from '../assets/img/invoice.webp';
import hrm from '../assets/img/hrm.webp';
import insights from '../assets/img/insights.webp';
import customerPortal from '../assets/img/customer-portal.webp';
import portfolioCard from '../assets/img/portfolio-card.webp';
import javaLogoCard from '../assets/img/java-logo-card.webp';

const cardData = [
    {
        imageRoute: invoice,
        function: "internship",
        title: "Invoice Module",
        slug: "Created an invoice management module during my internship.",
        themeColor: "teal"
    },
    {
        imageRoute: hrm,
        function: "internship",
        title: "HRM System",
        slug: "Tracked employee free hours and optimized HR processes.",
        themeColor: "indigo"
    },
    {
        imageRoute: insights,
        function: "internship",
        title: "Insights Dashboard",
        slug: "Created an analytics module using C# and .NET.",
        themeColor: "cyan"
    },
    {
        imageRoute: customerPortal,
        function: "work",
        title: "Customer Portal",
        slug: "Developed a portal for customer self-service.",
        themeColor: "violet"
    },
    {
        imageRoute: portfolioCard,
        function: "personal",
        title: "Portfolio Website",
        slug: "Developed a portfolio website in React!",
        themeColor: "red"
    },
    {
        imageRoute: javaLogoCard,
        function: "personal",
        title: "Java REST API",
        slug: "Building a REST API with Spring Boot",
        themeColor: "orange"
    }
];

export function CardProjects() {
    const [openedCard, setOpenedCard] = useState(null);

    return (
        <>
            <Row className={"g-4 justify-content-center"}>
                {cardData.toReversed().map((card) => (
                    <Col key={card.title} xs={12} sm={6} md={6} lg={4} style={{maxHeight: '355px'}}
                         className={"justify-content-start"}>
                        <Card key={card.title} shadow="lg" padding="lg" style={{height: '100%'}} className={"m-2"}
                              radius="md" withBorder>
                            <Card.Section>
                                <Image src={card.imageRoute} height={160} style={{width: '100%'}} alt="project image"/>
                            </Card.Section>

                            <Group className={"justify-content-center w-100"} mt={"xs"} mb={"xs"}>
                                <Row className={"w-100"}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Text fw={500}>{card.title}</Text>
                                    </Col>
                                </Row>
                                <Row className={"w-100"}>
                                    <Col className={"justify-content-center d-flex"} xs={12} sm={12} md={12} lg={12}>
                                        <Badge color={card.themeColor} variant={"filled"}>{card.function}</Badge>
                                    </Col>
                                </Row>
                            </Group>

                            <Text size="sm" c="dimmed">
                                {card.slug}
                            </Text>

                            <Button
                                color={card.themeColor}
                                variant="light"
                                onClick={() => setOpenedCard(card)}
                                fullWidth
                                mt="md"
                                radius="md"
                            >
                                Read more!
                            </Button>
                        </Card>
                    </Col>

                ))}
            </Row>
            {openedCard && (
                <Modal
                    opened={!!openedCard}
                    onClose={() => setOpenedCard(null)}
                    size="xl"
                    title={openedCard.title}
                >
                    <Image src={openedCard.imageRoute} style={{width: '100%', height: '180px'}} radius={"md"}
                           alt="project image"/>
                    <Container className={"py-2 border-bottom"}>
                        <Title>{openedCard.title}</Title>
                    </Container>
                    <Text>{getCardDescription(openedCard.title)}</Text>
                </Modal>
            )}
        </>
    );

    function getCardDescription(title) {
        switch (title) {
            case "Invoice Module":
                return (
                    <Container>
                        <Text size="lg">
                            This was my first interaction with the software development field. The project was
                            challenging
                            because it was the first time I programmed something different from what I was used to
                            in
                            school. The back-end was built with Laravel 8.x, PHP 8.1, SQL, and XML, while the
                            front-end was
                            developed using Laravel Blade, Bootstrap, JQuery, and HTML/CSS.
                        </Text>
                        <Text size="lg" className="my-4">
                            I created an invoice module for a large CRM platform, allowing customers to view their
                            invoices and invoice lines,
                            with the added functionality to download them as PDF files. The internship lasted for
                            five months, and I had a
                            great time working with the team.
                        </Text>
                        <Text size="lg">
                            This experience made me realize that working for a small company is more about social
                            interaction and collaboration
                            than solely focusing on performance. Of course, it’s still important to avoid
                            underperforming.
                        </Text>
                    </Container>
                );
            case "HRM System":
                return (
                    <Container>
                        <Text size="lg">
                            The year after my first internship, I returned to the same company, this time with a bit
                            more
                            experience. This time, I built an HRM system for the HR department where employees could
                            request
                            their days off or vacations. The system generated a PDF showing a list of their hours:
                            hours before
                            - hours requested - hours remaining. Each year, it automatically reset the hours back to
                            200-something hours.
                        </Text>
                        <Text size="lg" className="my-4">
                            This was a simple widget added to the CRM dashboard. This project was also my first
                            experience working with roles
                            and permissions, which was a challenge for me.
                        </Text>
                        <Text size="lg">
                            The back-end was built with Laravel 8.x,
                            PHP 8.2, SQL, and XML,
                            while the front-end was developed using Laravel Blade, Bootstrap, JQuery, and HTML/CSS.
                        </Text>
                    </Container>
                );
            case "Insights Dashboard":
                return (
                    <Container>
                        <Text size="lg">
                            During my third and final internship, which was my graduation internship, a classmate
                            and I built an
                            insights dashboard module. This module allowed customers to view analytics on their cash
                            register
                            transactions, orders, invoices, quotes, purchase orders, and warehouse stock. It
                            displayed all this
                            information in clear graphs and tables.
                        </Text>
                        <Text size="lg" className="my-4">
                            The purpose of this module was to create an additional layer on top of the analytics
                            page for the company I interned with,
                            so we could access identical statistics for each company and better understand how each
                            was performing.
                        </Text>
                        <Text size="lg">
                            The back-end was developed using C#, .NET, and T-SQL, while the front-end was built with
                            Vue.js, Bootstrap, and HTML/CSS.
                        </Text>
                    </Container>
                );
            case "Customer Portal":
                return (
                    <Container>
                        <Text size="lg">
                            After finishing school, I got a job at the company where I completed my last internship.
                            Shortly
                            after, I worked on the Insights Dashboard module before being assigned a new project —
                            the Customer
                            Portal. The in-house Project Management System (PMS) was built with PHP 7.3, so I
                            suggested using
                            Laravel 11.x and PHP 8.3 for the new project. They agreed, and together we created the
                            Customer Portal.
                        </Text>
                        <Text size="lg" className="mt-4">
                            This was familiar territory for me, as we were taught Laravel in school, and both of my
                            previous internships
                            involved working with Laravel. It felt like reconnecting with an old friend — catching
                            up on what&#39;s new,
                            but still familiar.
                        </Text>
                        <Text size="lg" className="mt-4">
                            This was also my first time taking on a larger share of the work, as I had more
                            experience with the language/framework
                            being used. While the other developer focused on addressing ongoing maintenance issues
                            with the PMS, I handled
                            much of the development for the Customer Portal. It was an exciting and enjoyable
                            experience for me.
                        </Text>
                        <Text size="lg" className="mt-4">
                            The back-end was built with PHP 8.3, Laravel 11.x, and SQL, while the front-end was
                            developed using Bootstrap and HTML/CSS.
                        </Text>
                    </Container>
                );
            case "Portfolio Website":
                return (
                    <Container>
                        <Text size="lg">
                            For a long time, I wanted to create something in React to gain a better understanding of
                            front-end
                            applications. So, I decided to create a portfolio website while learning React. As part
                            of the learning
                            process, I also wanted to understand how to deploy and host a website. I am familiar
                            with GitHub Pages
                            and have used it for several unfinished projects, but I wanted my own custom domain to
                            make it more personal.
                        </Text>
                        <Text size="lg" className="mt-4">
                            This project is built using React, Mantine, Bootstrap, and HTML/CSS, and is hosted by
                            Strato.
                        </Text>
                    </Container>
                );
            case "Java REST API":
                return (
                    <Container>
                        <Text size="lg">
                            To expand my skill set beyond PHP and Laravel, I started learning Java by building a RESTful API. My
                            previous experience with APIs and familiarity with back-end development made this a natural progression.
                            While I initially found Java challenging due to its differences from PHP, I soon discovered the power
                            and flexibility of Spring Boot for building APIs.
                        </Text>
                        <Text size="lg" className="mt-4">
                            This project, named &#34;Calzyr,&#34; began as an idea for a calendar package with API compatibility and has
                            since evolved into my primary Java learning project. It combines Java 23, Spring Boot, and MySQL, and
                            serves as a foundation for exploring Java&#39;s capabilities in modern back-end development.
                        </Text>
                    </Container>
                );
            default:
                return (
                    <Container>
                        <Title order={2} className="text-center my-4">No available description.</Title>
                    </Container>

                );
        }
    }
}
