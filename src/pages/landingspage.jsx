import {Container, Image} from "@mantine/core";
import {Col, Row} from "react-bootstrap";
import {useMediaQuery} from "@mantine/hooks";

function getAge() {
    const birthday = new Date('2003-05-14');
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
            <Container className={`my-4 pb-3 ${isMobile ? 'border-bottom' : ''}`}>
                <Row className="align-items-center">
                    {/* Text Content */}
                    <Col xs={12} md={8} className={`text-center text-md-start mb-3 mb-md-0 ${isMobile ? 'px-3' : 'ps-5'}`}>
                        <p>Hi! Welcome to my website my name is </p>
                        <h1>Jesse de Koe</h1>
                        <p>I am {getAge()} years old, living in Overijssel, Netherlands🇳🇱</p>
                    </Col>

                    {/* Image */}
                    <Col xs={12} md={4} className="text-center">
                        <Image
                            src={"./src/assets/img/memoji.png"}
                            alt={"memoji"}
                            height={200}
                            className="rounded-circle shadow"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

