import { Container, Title, Text } from '@mantine/core';

export function AboutPage() {
    return(
        <>
            <Container>
                <Title order={2}>About Me</Title>
                {/*<Image src="/path-to-your-photo.jpg" alt="Your photo" radius="md" />*/}
                <Text size="md">
                    I'm a developer with a passion for building amazing applications. I specialize in React and love creating seamless user experiences.
                </Text>
            </Container>
        </>
    )
}

