import { useState } from "react";
import {Badge, Button, Card, Group, Image, Modal, Text, Title} from "@mantine/core";

const cardData = [
    { imageRoute: "src/assets/img/invoice.jpg", isInternship: 1, title: "Invoice module", slug: "Created an invoice management module during my internship.", fullDescription: "", themeColor: "teal" },
    { imageRoute: "src/assets/img/hrm.jpg", isInternship: 1, title: "HRM System", slug: "Tracked employee free hours and optimized HR processes.", fullDescription: "", themeColor: "indigo" },
    { imageRoute: "src/assets/img/insights.jpg", isInternship: 1, title: "Insights Dashboard", slug: "Created an analytics module using C# and .NET.", fullDescription: "", themeColor: "cyan" },
    { imageRoute: "src/assets/img/customer-portal.webp", isInternship: 0, title: "Customer Portal", slug: "Developed a portal for customer self-service.", fullDescription: "", themeColor: "violet" }
];

export function CardProjects() {
    const [openedCard, setOpenedCard] = useState(null);

    return (
        <>
            {cardData.map((card) => (
                <Card key={card.title} shadow="lg" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image src={card.imageRoute} height={160} alt="project image" />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{card.title}</Text>
                        <Badge color={cardData.themeColor}>{cardData.isInternship === 1 ? 'Internship' : ''}</Badge>
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
            ))}

            {openedCard && (
                <Modal
                    opened={!!openedCard}
                    onClose={() => setOpenedCard(null)}
                    size="xl"
                    title={openedCard.title}
                >
                    <Image src={openedCard.imageRoute} height={140} alt="project image" />
                    <Title>{openedCard.title}</Title>
                    <Text>{openedCard.fullDescription || "No description available."}</Text>
                </Modal>
            )}
        </>
    );
}
