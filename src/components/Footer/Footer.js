import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,

} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>

                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="#">Services</FooterLink>
                    </Column>
                    <Column>

                        <FooterLink href="#">Contact</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;