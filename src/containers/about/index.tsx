import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { AboutStack } from "./styled";
import about from "../../assets/about.svg";
import { AboutRefType } from "../../types/app.type";

export const About: React.FC<AboutRefType> = ({ aboutRef }) => {
    return (
        <AboutStack
            id="about"
            ref={aboutRef}
            margin={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding)", desktop: "calc(3 * var(--sectionMargin)) var(--pagePadding)" }}
            justifyContent={"space-between"}
            direction={{ mobile: "column", tablet: "row" }}
            gap={"calc(var(--flexGap)/3)"}
        >
            <Card
                sx={{
                    flex: 1
                }}
            >
                <CardHeader
                    title={
                        <Typography
                            variant="h2"
                            fontFamily={"PP Telegraph"}
                            fontWeight={400}
                            fontSize={{ mobile: 28, miniTablet: 35, tablet: 50 }}
                            lineHeight={"normal"}
                            color={"rgba(10, 53, 57, 1)"}
                            whiteSpace={"normal"}
                            marginBlockEnd={"1rem"}
                        >
                            About  Us
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography
                        variant="body1"
                        fontFamily={"PP Telegraph"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"30px"}
                        color={"rgba(0, 0, 0, 1)"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"2rem"}
                    >
                        D'alorts Engineering  is a leading provider of integrated Engineering, Procurement, Construction & Installation (EPCI) services, Instrumentation & Electrical Services, Automation & Control System, Manpower Support & Training across the asset and project life cycle within the onshore, offshore and subsea markets of the oil and gas & Power sector.
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"PP Telegraph"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"30px"}
                        color={"rgba(0, 0, 0, 1)"}
                        whiteSpace={"normal"}
                    >
                        Our people, assets, specialist technical partners and cordial relationship with the communities in which we operate enables us to deliver projects on schedule, safely and with unparalleled quality.
                    </Typography>
                </CardContent>
            </Card>
            <Box
                sx={{
                    backgroundImage: `url(${about})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left top",
                    borderRadius: "10px",
                    flex: 1,
                    minHeight: { mobile: 636, tablet: "unset" }
                }}
            />
        </AboutStack>
    )
}