import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { services } from "../../data";
import { PagePropsType } from "../../types/app.type";
import { Navbar } from "../../components/navigation";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FAQ } from "../../components/faq";
import { Overview } from "../../components/overview";

export const Service: React.FC<PagePropsType> = ({ footerRef }) => {
    const { service } = useParams();
    const serviceDetail = services.find((detail) => {
        return (
            detail.header
                .split(" ")
                .join("")
                .toLowerCase() === service
        )
    });
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Navbar footerRef={footerRef} />
            <Header
                location="service"
                bgHeight={494}
                headerBg={serviceDetail?.bg}
                headerText={serviceDetail?.header}
                textWidth={{ mobile: '100%', miniTablet: '90%', tablet: '80%' }}
            />
            <Overview service={serviceDetail} />
            <FAQ />
            <Footer
                page="service"
                footerRef={footerRef}
            />
        </Container>
    )
}