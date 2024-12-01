import {Container, Title, Button, List} from '@mantine/core';

export function CVPage() {
    return (

        <Container>
            <Title order={2}>My CV</Title>
            <Button variant="outline" component="a" href="/path-to-cv.pdf" download>
                Download CV
            </Button>
            <Title order={3} mt="lg">Work Experience</Title>
            <List>
                <List.Item>Software Engineer at Company A (2021 - Present)</List.Item>
                <List.Item>Frontend Developer at Company B (2019 - 2021)</List.Item>
            </List>
        </Container>
    )
}
