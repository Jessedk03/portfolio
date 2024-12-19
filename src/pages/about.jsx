import {Container, Text, Title} from '@mantine/core';
import {getAge} from "./landingspage.jsx";
import {Col, Row} from "react-bootstrap";
import {useMediaQuery} from "@mantine/hooks";

export function AboutPage() {
    const isMobile = useMediaQuery(`(max-width: 576px)`);
    return (
        <>
            <Container className={"mb-5"}>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={8} xl={8}>
                        <Title className={"h4 pt-2 pb-1"}>
                            About Me
                        </Title>
                        <Text className={"py-1"}>
                            Hi, I’m Jesse de Koe – or just Jesse ({getAge('2003-05-14')}). I was born in Meppel and
                            raised in
                            Staphorst, Netherlands.
                            Currently, I work as a software developer at LogicTrade/Bloemert SSC, where I focus on
                            back-end
                            development using PHP and Laravel.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            My Journey
                        </Title>
                        <Text className={"py-1"}>
                            I studied Software Development at Landstede MBO for four years, which led me to the world of
                            software
                            development. At LogicTrade/Bloemert SSC, one of my main projects has been building a
                            customer portal
                            from scratch, a challenging yet rewarding experience.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            What Drives Me
                        </Title>
                        <Text className={"py-1"}>
                            I find satisfaction in solving problems and building systems that work well and perform
                            efficiently.
                            There’s no rush in the mornings for me; I tend to start slow and gradually ease into the
                            day. But
                            once I
                            get into my work, I’m focused on the task at hand.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            A Glimpse Into My Personality
                        </Title>
                        <Text className={"py-1"}>
                            I’m a bit of a "kat uit de boom kijken" type. I like to observe my surroundings and get a
                            feel for
                            things before I dive in. I may come off as reserved at first, but I’m more comfortable once
                            I get to
                            know people.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            Beyond Work
                        </Title>
                        <Text className={"py-1"}>
                            Outside of work, I spend a lot of time at the gym, keeping up with software development, or
                            hanging
                            out
                            with my girlfriend, who lives in Utrecht. I’ll soon be moving to her, and I’m looking
                            forward to the
                            change in scenery (and work opportunities). In my downtime, I enjoy TV shows with a fiction
                            twist—stuff
                            like Dexter or The Walking Dead—where the impossible feels just plausible enough.
                        </Text>
                        <Text className={"py-1"}>
                            Fun fact: I know a lot of random stuff, so don’t be surprised if I throw in a few unexpected
                            facts
                            during a lunch walk.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            Values and Aspirations
                        </Title>
                        <Text className={"py-1"}>
                            Honesty and respect are important to me. I believe in listening to others and valuing their
                            perspectives, no matter their position.
                        </Text>
                        <Text className={"py-1"}>
                            My short-term goal is to land a job in Utrecht for my Software Development degree at
                            Hogeschool
                            Utrecht.
                            Long-term, I’d like to have a family and a house. Though, given the current housing market,
                            that
                            might take
                            a bit longer than expected.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            A Few More Things
                        </Title>
                        <Text className={"py-1"}>
                            One of my favorite quotes is from Dylan Thomas: "Rage, rage against the dying of the light."
                            It’s a
                            reminder
                            to keep pushing forward, no matter the circumstances.
                        </Text>
                        <Text className={"py-1"}>
                            Life hasn’t always been easy, but I believe in rolling with the punches. When I was younger,
                            I faced
                            challenges like my parents’ divorce and the loss of my dad to lung cancer, but they didn’t
                            define
                            me.
                            They’ve shaped my outlook, but I’ve learned to keep going.
                        </Text>
                        <Title className={"h4 pt-2 pb-1"}>
                            Let’s Connect
                        </Title>
                        <Text className={"py-1"}>
                            If you’ve gotten this far, you probably have a better idea of who I am. I’m always open to
                            new
                            opportunities
                            and connections—whether it’s for work or just a casual chat.
                        </Text>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} className={isMobile ? "border-top mt-2" : "border-start"}>
                        <Title className={"h4 pt-2 pb-1"}>
                            This is me!
                        </Title>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

