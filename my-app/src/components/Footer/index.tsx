/* eslint-disable @typescript-eslint/no-redeclare */
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
    FooterSection,
    FooterContainer,
    LogoContainer,
    Info,
    InfoTitle,
    InfoContent,
} from "./styles";

const Footer = ({ t }: any) => {
    return (
        <FooterSection>
            <Container>
                <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
                    <Col>
                        <LogoContainer  aria-label="homepage">
                            {/* Assuming you have an SVG or image file for the BlueSky logo */}
                            <img src="/img/icons/Bluesky-Icon.jpg" alt="BlueSky Logo" style={{ width: '150px' }} />
                        </LogoContainer>
                        <Info>
                            <InfoTitle>{t("Address")}</InfoTitle>
                            <InfoContent>1431 Opus Pl, Suite 110 Downers Grove, IL 60515 </InfoContent>
                            <InfoContent> </InfoContent>
                            <InfoContent>United States</InfoContent>
                        </Info>
                        <Info>
                            <InfoTitle>{t("Contact")}</InfoTitle>
                            <InfoContent>Email: hello@blueskytelepsych.com</InfoContent>
                            <InfoContent>Phone: (888) 279-0002</InfoContent>
                        </Info>
                    </Col>
                    <FooterContainer>
                        {/* Your social links here */}
                    </FooterContainer>
                </Row>
            </Container>
        </FooterSection>
    );
};



export default withTranslation()(Footer);
