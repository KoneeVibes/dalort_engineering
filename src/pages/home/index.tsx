import { Container, Typography } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Header } from "../../components/header";
import { Services } from "../../containers/services";
import { About } from "../../containers/about";
import { CoreValue } from "../../containers/coreValue";
import { Professionals } from "../../containers/professionals";
import { Testimonial } from "../../containers/testimonial";
import { Calendly } from "../../containers/calendly";
import { FAQ } from "../../components/faq";
import { Footer } from "../../components/footer";
import { PagePropsType } from "../../types/app.type";
import { callsToAction } from "../../data";
import { BaseButton } from "../../components/button/styled";
import headerBg from "../../assets/headerBg.svg";

export const Home: React.FC<PagePropsType> = ({ aboutRef, footerRef, calendlyRef }) => {
    const callToAction = callsToAction.map((callToAction, k) => {
        return (
            <BaseButton
                key={k}
                isheaderbutton={callToAction.isHeaderButton}
                location={callToAction.location}
                sx={{
                    width: { mobile: "100%", miniTablet: "auto" },
                }}
                onClick={() => {
                    if (k === 0) {
                        aboutRef?.current?.scrollIntoView({ behavior: "smooth" })
                    } else {
                        calendlyRef?.current?.scrollIntoView({ behavior: "smooth" })
                    }
                }}
            >
                <Typography
                    variant="button"
                    fontFamily={"inherit"}
                    fontWeight={"inherit"}
                    fontSize={"inherit"}
                    lineHeight={"inherit"}
                    color={"inherit"}
                    textTransform={"inherit"}
                >
                    {callToAction.buttonText}
                </Typography>
            </BaseButton>
        )
    })
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Navbar footerRef={footerRef} />
            <Header
                location={"home"}
                headerBg={headerBg}
                bgHeight={692}
                headerText="Engineering, Construction, Installation and Project Management of Oil and Gas Facilities"
                subHeaderText="To utilize local expertise to deliver industry standard and world class services"
                callToAction={callToAction}
            />
            <Services />
            <About aboutRef={aboutRef} />
            <CoreValue />
            <Professionals />
            <Testimonial />
            <Calendly calendlyRef={calendlyRef} />
            <FAQ />
            <Footer
                page="home"
                footerRef={footerRef}
                calendlyRef={calendlyRef}
            />
        </Container>
    )
}