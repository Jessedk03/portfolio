import {Container, Title, Button, List, Image} from '@mantine/core';
import {Col, Row} from "react-bootstrap";

export function CVPage() {
    return (
        <Container>
            <Row>
                <Col md={12} lg={12} xl={12}>
                    <Title order={2}>My CV</Title>
                </Col>
            </Row>
            <Row>
                <Col md={2} lg={2} xl={2}>
                    <Button variant="light" leftSection={<Image height={20} width={20} src={"src/assets/img/flag-nl.png"} />} component={"a"} href="https://pitch.com/v/jesse-de-koe-cv-42tffa" target={"_blank"}>
                        CV Pitch
                    </Button>
                </Col>
            </Row>
            <Row>
                <small className={"fst-italic text-muted"}>* Brings you to another page</small>
            </Row>
            <Title order={3} mt="lg">Work Experience</Title>
            <List>
                <List.Item>Software Engineer at Company A (2021 - Present)</List.Item>
                <List.Item>Frontend Developer at Company B (2019 - 2021)</List.Item>
            </List>
        </Container>
    )
}
