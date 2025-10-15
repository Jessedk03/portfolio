import {Anchor, Code, Container, Text, Title} from '@mantine/core';
import {Col, Row} from "react-bootstrap";
import {useMediaQuery} from "@mantine/hooks";

export function CVPage() {
    const isMobile = useMediaQuery(`(max-width: 576px)`);

    return (
        <>
            <Container className={`mb-5 ${isMobile ? false : "pt-3"}`}>
                <Row>
                    <Col xs={12} sm={12} md={7} lg={7} xl={7} className={`${isMobile ? false : "border-end"}`}>
                        {/* <Title order={2}>My CV</Title> */}
                        {/* <Text>
                            Click <Anchor href="https://pitch.com/v/jesse-de-koe-cv-42tffa"
                                          target={"_blank"}>here </Anchor>
                            to see my CV in a less &#39;boring&#39; way. This does bring you to another page.
                            {isMobile ? <><br/><Code>Tip: try to have your device in landscape mode</Code></> : false}
                        </Text> */}
                        <Title order={3} mt="lg" className={`${isMobile ? "border-bottom" : false}`}>Projects</Title>

                        <Title order={5} mt={"sm"}>Customer Portal (Bloemert SSC)</Title>
                        <Text fz={"sm"}>
                            Created a Customer Portal for Bloemert ICT so their customers could log in
                            to
                            view
                            their
                            subscriptions, invoices, and most importantly, their tickets. They could
                            also
                            manage
                            their employees by adding or removing them from the portal as needed. This
                            allows
                            Bloemert ICT&#39;s customers to self-manage their accounts, reducing
                            administrative
                            overhead.
                            The project was implemented using Laravel and PHP.
                        </Text>

                        <Title order={5} mt={"sm"}>Insights Dashboard (LogicTrade)</Title>
                        <Text fz={"sm"}>
                            Created an analytics module using C# and .NET. This was my graduation internship
                            project,
                            and after being hired, I was able to finalize it. The purpose of this project
                            was to
                            provide LogicTrade and their customers with a comprehensive module for business
                            insights.
                        </Text>

                        <Title order={5} mt={"sm"}>HRM System (Digi-Process)</Title>
                        <Text fz={"sm"}>
                            Integrated an HRM system into an existing CRM system, enabling HR to track
                            employees
                            leave
                            days and view remaining balances. The system also allowed exporting this data in
                            PDF
                            format.
                        </Text>

                        <Title order={5} mt={"sm"}>Invoice Module (Digi-Process)</Title>
                        <Text fz={"sm"}>
                            Created an invoice module for an existing CRM system, where customers could view
                            detailed
                            invoice lines and print their invoices.
                        </Text>
                        <Title order={3} mt={"lg"}>Miscellaneous</Title>
                        <Text>Drivers License</Text>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <Title order={3} mt="lg">Work Experience</Title>
                        <Text fz={"md"} mt={"xs"}>
                            Software Developer at NBIP
                            <small><br/>(09-2025 - present)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            Software Developer at Bloemert SSC <small><br/>(Bloemert Group)</small>
                            <small><br/>(12-2024 - 03-2025)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            Software Developer at LogicTrade <small><br/>(Bloemert Group)</small>
                            <small><br/>(07-2024 - 12-2024)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            Software Developer Intern at LogicTrade
                            <small><br/>(03-2024 - 07-2024)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            Software Developer Intern at Digi-Process
                            <small><br/>(02-2023 - 06-2023)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>Software Developer Intern at Digi-Process
                            <small><br/>(02-2022 - 06-2022)</small>
                        </Text>
                        <Title order={3} mt="lg">Education</Title>
                        <Text fz={"md"} mt={"xs"}>
                            Bachelor of Science in Software Development, Hogeschool Utrecht
                            <small><br/>(09-2025 - present)</small>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            Software Development, Landstede MBO (Level 4)
                            <small><br/>(10-2020 - 06-2024)</small>
                        </Text>
                        <Title order={3} mt="lg">Skills</Title>
                        <Text fz={"md"} mt={"xs"}>Programming Languages: PHP, C#, Java, Javascript, MySql</Text>
                        <Text fz={"md"} mt={"xs"}>Frameworks: Laravel, ASP.NET, Spring Boot, React, Vue.js</Text>
                        <Text fz={"md"} mt={"xs"}>Tools: Git, SQL Server, Linux</Text>
                        <Text fz={"md"} mt={"xs"}>Soft Skills: Problem-solving, Communication, Teamwork, Multidisciplinary Teamwork</Text>
                    </Col>
                    <div className={"border-top mt-3"}>
                        <Title order={3} mt="xs">Contact Information</Title>
                        <Text fz={"md"} mt={"xs"}>
                            LinkedIn:&thinsp;
                            <Anchor href="https://linkedin.com/in/jesse-de-koe" target="_blank">
                                linkedin.com/in/jesse-de-koe
                            </Anchor>
                        </Text>
                        <Text fz={"md"} mt={"xs"}>
                            GitHub:&thinsp;
                            <Anchor href="https://github.com/Jessedk03" target="_blank">
                                github.com/Jessedk03
                            </Anchor>
                        </Text>
                    </div>
                </Row>
            </Container>
        </>
    );
}
