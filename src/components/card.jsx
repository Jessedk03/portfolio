import {useState} from "react";
import {Badge, Button, Card, Group, Image, Modal, Text, Title} from "@mantine/core";
import {Col, Row} from "react-bootstrap";

const cardData = [
    {
        imageRoute: "src/assets/img/invoice.jpg",
        function: "internship",
        title: "Invoice module",
        slug: "Created an invoice management module during my internship.",
        fullDescription: "",
        themeColor: "teal"
    },
    {
        imageRoute: "src/assets/img/hrm.jpg",
        function: "internship",
        title: "HRM System",
        slug: "Tracked employee free hours and optimized HR processes.",
        fullDescription: "",
        themeColor: "indigo"
    },
    {
        imageRoute: "src/assets/img/insights.jpg",
        function: "internship",
        title: "Insights Dashboard",
        slug: "Created an analytics module using C# and .NET.",
        fullDescription: "",
        themeColor: "cyan"
    },
    {
        imageRoute: "src/assets/img/customer-portal.webp",
        function: "work",
        title: "Customer Portal",
        slug: "Developed a portal for customer self-service.",
        fullDescription: "",
        themeColor: "violet"
    }
];

export function CardProjects() {
    const [openedCard, setOpenedCard] = useState(null);

    return (
        <>
            <Row className={"g-4 justify-content-center"}>
                {cardData.map((card) => (
                    <Col key={card.title} xs={12} md={6} lg={4} className={"justify-content-start"}>
                        <Card key={card.title} shadow="lg" padding="lg" className={"m-2"} radius="md" withBorder>
                            <Card.Section>
                                <Image src={card.imageRoute} height={160} alt="project image"/>
                            </Card.Section>

                            <Group className={"justify-content-center w-100"} mt={"xs"} mb={"xs"}>
                                <Row className={"w-100"}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Text fw={500}>{card.title}</Text>
                                    </Col>
                                </Row>
                                <Row className={"w-100"}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
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
                    <Image src={openedCard.imageRoute} height={140} alt="project image"/>
                    <Title>{openedCard.title}</Title>
                    <Text>{openedCard.fullDescription || "No description available."}</Text>
                </Modal>
            )}
        </>
    );
}
