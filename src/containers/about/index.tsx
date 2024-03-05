import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { AboutStack } from "./styled";
import about from "../../assets/about.svg";

export const About: React.FC<{}> = () => {
    return (
        <AboutStack
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
                            fontWeight={800}
                            fontSize={30}
                            lineHeight={"normal"}
                            color={"rgba(10, 53, 57, 1)"}
                            whiteSpace={"normal"}
                            marginBlockEnd={"1rem"}
                        >
                            About  Us
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant="body1"
                            fontFamily={"PP Telegraph"}
                            fontWeight={400}
                            fontSize={16}
                            lineHeight={"30px"}
                            color={"rgba(0, 0, 0, 1)"}
                            whiteSpace={"normal"}
                        >
                            Hakit Services Limited is licenced to practice engineering COREN ECF. 00726 Our focus is to utilize local expertise to deliver industry standard and world class services. Primary clients are the Major and Indigenous Oil and Gas, The Energy and Maritime Companies. We look forward to you.
                        </Typography>
                    }
                />
                <CardContent>
                    <ul>
                        <li>
                            <Typography
                                variant="h3"
                                component={"span"}
                                fontFamily={"PP Telegraph"}
                                fontWeight={800}
                                fontSize={30}
                                lineHeight={"normal"}
                                color={"rgba(8, 59, 59, 1)"}
                                whiteSpace={"normal"}
                                paddingInlineStart={"1rem"}
                                sx={{
                                    verticalAlign: "super"
                                }}
                            >
                                Mission
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={16}
                                lineHeight={"30px"}
                                color={"rgba(0, 0, 0, 1)"}
                                whiteSpace={"normal"}
                                marginBlockStart={"1rem"}
                            >
                                To provide fit for purpose Engineering and Project Management Services to our Clients. Technical proficiency, cost effectiveness and timely deliverable will be our brand.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h3"
                                component={"span"}
                                fontFamily={"PP Telegraph"}
                                fontWeight={800}
                                fontSize={30}
                                lineHeight={"normal"}
                                color={"rgba(8, 59, 59, 1)"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"1rem"}
                                paddingInlineStart={"1rem"}
                                sx={{
                                    verticalAlign: "super"
                                }}
                            >
                                Vision
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={16}
                                lineHeight={"30px"}
                                color={"rgba(0, 0, 0, 1)"}
                                whiteSpace={"normal"}
                                marginBlockStart={"1rem"}
                            >
                                To provide fit for purpose Engineering and Project Management Services to our Clients. Technical proficiency, cost effectiveness and timely deliverable will be our brand.
                            </Typography>
                        </li>
                    </ul>
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