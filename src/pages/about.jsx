import {Anchor, Button, Container, Image, Text, Title} from '@mantine/core';
import {getAge} from "./landingspage.jsx";
import {Col, Row} from "react-bootstrap";
import {useMediaQuery} from "@mantine/hooks";
import {Linkedin} from "../assets/svg/linkedin.jsx";
import {Github} from "../assets/svg/github.jsx";
import {Carousel} from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';
import {useRef} from "react";

import laptopMan from '../assets/img/laptop-man.webp';
import trainTrack from '../assets/img/train-track.webp';
import star from '../assets/img/star.webp';
import bullsEye from '../assets/img/bullseye.webp';
import house from '../assets/img/house.webp';
import sparkles from '../assets/img/sparkles.webp';
import phone from '../assets/img/phone.webp';
import thisIsMe1 from '../assets/img/this-is-me-1.webp';
import thisIsMe2 from '../assets/img/this-is-me-2.webp';
import thisIsMe3 from '../assets/img/this-is-me-3.webp';

const funFacts = [
    {fact: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible."},
    {fact: "Octopuses have three hearts, and two of them stop beating when they swim."},
    {fact: "Bananas are berries, but strawberries are not."},
    {fact: "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes."},
    {fact: "Wombat poop is cube-shaped to help it stay in place and mark territory."},
    {fact: "Sharks existed before trees. They’ve been around for over 400 million years."},
    {fact: "The inventor of the Pringles can, Fred Baur, had his ashes stored in one after he passed away."},
    {fact: "There’s a species of jellyfish that can revert its cells back to an earlier state, making it essentially immortal."},
    {fact: "The Eiffel Tower can grow more than six inches during the summer due to the expansion of its metal in the heat."},
    {fact: "Sloths can hold their breath longer than dolphins, up to 40 minutes."},
    {fact: "A day on Venus is longer than a year on Venus due to its slow rotation."},
    {fact: "Cows have best friends and get stressed when they are separated."},
    {fact: "There’s a McDonald’s in every continent except Antarctica."},
    {fact: "A group of flamingos is called a 'flamboyance.'"},
    {fact: "The dot over the lowercase letters 'i' and 'j' is called a tittle."},
    {fact: "Koalas have fingerprints so similar to humans that they’ve been mistaken at crime scenes."},
    {fact: "There’s an island in Japan, Aoshima, that has more cats than people."},
    {fact: "The world’s largest snowflake on record was 15 inches wide and 8 inches thick."},
    {fact: "In Switzerland, it’s illegal to own just one guinea pig. They are considered social animals and need a companion."}
];

export function AboutPage() {
    const isMobile = useMediaQuery(`(max-width: 576px)`);

    let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)].fact;

    const autoplay = useRef(Autoplay({delay: 4000}));

    return (
        <>
            <Container className={`mb-5 ${isMobile ? false : "mt-3"}`}>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={8} xl={8}>
                        {/*About me*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    About me
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={laptopMan}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            Hi, I’m Jesse de Koe – or just Jesse ({getAge('2003-05-14')}). I was born in Meppel and
                            raised in
                            Staphorst, Netherlands.
                            I work as a software developer at NBIP, where I focus on
                            back-end
                            development using PHP and Laravel. <s>Currently looking for a job!</s> click <Anchor
                            href={"/cv"}>here</Anchor> for my resume. 
                        </Text>
                        {/*My Journey*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    My journey
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={trainTrack}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            I studied Software Development at Landstede MBO for four years, which led me to the world of
                            software
                            development. At LogicTrade/Bloemert SSC, one of my main projects has been building a
                            customer portal
                            from scratch, a challenging yet rewarding experience. My next challenge will be at
                            Hogeschool Utrecht, where I will study Software Development in a dual program, attending
                            school two days a week and spending the other three days working at a software company.
                        </Text>
                        {/*A Glimpse Into My Personality*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    A glimpse into my personality
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={star}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            I’m a bit of a &#34;kat uit de boom kijken&#34; type. I like to observe my surroundings and
                            get a
                            feel for things before I dive in. I may come off as reserved at first, but I’m more
                            comfortable once I get to know people.
                        </Text>
                        <Text className={"py-1"}>
                            Fun fact: I know a lot of random stuff, so don’t be surprised if I throw in a few unexpected
                            facts during a lunch walk. e.g. {randomFact}
                        </Text>
                        {/*Beyond Work*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    Beyond work
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={bullsEye}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            Outside of work, I spend a lot of time throwing weights around at the gym, keeping up with
                            software development, or hanging out with my girlfriend.
                            In my downtime, I enjoy TV shows with a fiction twist-stuff like Dexter or The Walking
                            Dead-where the impossible feels just plausible enough.
                        </Text>
                        {/*Values and Aspirations*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    Values and aspirations
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={house}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            Honesty and respect are important to me. I believe in listening to others and valuing their
                            perspectives, no matter their position.
                        </Text>
                        <Text className={"py-1"}>
                            My short-term goal is to land a job in Utrecht for my Software Development degree at
                            Hogeschool Utrecht. Long-term, I’d like to have a family and a house. Though, given the
                            current housing market, that might take a bit longer than expected.
                        </Text>
                        {/*A Few More Things*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    A few more things
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={sparkles}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            One of my favorite quotes is from Dylan Thomas: &#34;Do not go gentle into that good
                            night.&#34;
                            Which i got from the movie Interstellar, when inspecting the quote further it stayed with me
                            as a reminder to keep pushing forward, no matter the circumstances.
                        </Text>
                        <Text className={"py-1"}>
                            Life hasn’t always been easy, but I believe in rolling with the punches. When I was younger,
                            I faced challenges like my parents’ divorce and the loss of my dad to lung cancer,
                            but they didn’t define me. They’ve shaped my outlook, but I’ve learned to keep going.
                        </Text>
                        {/*Let's Connect*/}
                        <Title className={"h4 pt-2 pb-1"}>
                            <Row>
                                <Col className={"d-flex align-items-center"} xs={12} sm={12} md={12} lg={12} xl={12}>
                                    Let&#39;s connect
                                    <Image className={"ms-1"} style={{width: 20, height: 20}}
                                           src={phone}/>
                                </Col>
                            </Row>
                        </Title>
                        <Text className={"py-1"}>
                            If you’ve gotten this far, you probably have a better idea of who I am. I’m always open to
                            new opportunities and connections—whether it’s for work or just a casual chat.
                        </Text>
                        <Text className={"py-1"}>
                            {/*Media*/}
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <fieldset className="border rounded-2 p-2 px-3">
                                        <legend className="float-none w-auto px-3 fs-5">
                                            Connect with me
                                        </legend>
                                        <Row className="pb-2">
                                            <Col className="justify-content-center d-flex" xs={6} sm={6} md={6} lg={6}>
                                                <Button
                                                    variant={"filled"}
                                                    color={"#0072B1"}
                                                    className={"text-white"}
                                                    component={"a"}
                                                    style={isMobile ? {fontSize: "12px"} : {}}
                                                    href={"https://www.linkedin.com/in/jesse-de-koe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}
                                                    target={"_blank"} rightSection={<Linkedin color="white"/>}>
                                                    Let&#39;s Connect</Button>
                                            </Col>
                                            <Col className="justify-content-center d-flex" xs={6} sm={6} md={6} lg={6}>
                                                <Button
                                                    variant={"filled"}
                                                    color={"#24292e"}
                                                    className={"text-white"}
                                                    component={"a"}
                                                    style={isMobile ? {fontSize: "12px"} : {}}
                                                    href={"https://github.com/Jessedk03"}
                                                    target={"_blank"} rightSection={<Github color="white"/>}>
                                                    Follow Me
                                                </Button>
                                            </Col>
                                        </Row>
                                    </fieldset>
                                </Col>
                            </Row>
                        </Text>
                    </Col>
                    {/*Image Carrousel*/}
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} className={isMobile ? "border-top mt-2" : "border-start"}>
                        <Container>
                            <Title className={"h4 pt-2 pb-1"}>
                                This is me!
                            </Title>
                        </Container>
                        <Container className={"d-flex align-items-center justify-content-center"}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Carousel
                                        height={"100%"}
                                        slideGap={"sm"}
                                        loop={true}
                                        plugins={[autoplay.current]}
                                        onMouseEnter={autoplay.current.stop}
                                        onMouseLeave={autoplay.current.reset}>
                                        <Carousel.Slide>
                                            <Image
                                                className={"rounded-2"}
                                                src={thisIsMe1}/>
                                        </Carousel.Slide>
                                        <Carousel.Slide>
                                            <Image
                                                className={"rounded-2"}
                                                src={thisIsMe2}/>
                                        </Carousel.Slide>
                                        <Carousel.Slide>
                                            <Image
                                                className={"rounded-2"}
                                                src={thisIsMe3}/>
                                        </Carousel.Slide>
                                    </Carousel>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}
                                     className="text-center fst-italic text-muted">
                                    <small>Black & White picture taken and edited by Mathias Molema</small>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

