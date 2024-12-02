import {Container, Image} from "@mantine/core";
import {Col, Row} from "react-bootstrap";
import {useMediaQuery} from "@mantine/hooks";
import {CardProjects} from "../components/card.jsx";

function getAge(birthdayDate) {
    const birthday = new Date(birthdayDate);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
}

export function LandingPage() {
    const isMobile = useMediaQuery(`(max-width: 767px)`);
    return (
        <>
            <Container className={"py-3 border-bottom"}>
                <Row className="align-items-center">
                    <Col xs={12} md={8}
                         className={`text-center text-md-start mb-3 mb-md-0 ${isMobile ? 'px-3' : 'ps-5'}`}>
                        <p className={"m-0"}>Hi! Welcome to my website my name is </p>
                        <h1>Jesse de Koe</h1>
                        <p>I am {getAge('2003-05-14')} years old, living in Overijssel, Netherlands <Image
                            src={"src/assets/img/flag-nl.png"} style={{width: 20, height: 20}} className={"mb-1"}/>
                        </p>
                    </Col>

                    <Col xs={12} md={4} className="align-items-center d-flex">
                        <Image
                            src={"./src/assets/img/memoji.png"}
                            alt={"memoji"}
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                            className="shadow"
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="align-items-center pt-3">
                    <h2 className={`${isMobile ? 'px-3 text-center w-100' : 'ps-5'}`}>Projecten</h2>
                    <Col xs={12} md={4} className="text-center">
                        <CardProjects/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

