import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { BaseButton } from "../../components/button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { CoreValueBox } from "./styled";
import corevalue from "../../assets/corevalue.svg";

export const CoreValue: React.FC<{}> = () => {
    return (
        <CoreValueBox
            padding={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding) calc(3 * var(--sectionMargin))", desktop: "calc(3 * var(--sectionMargin)) var(--pagePadding)" }}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
            >
                <BaseButton
                    isheaderbutton={"false"}
                    endIcon={<ArrowOutwardIcon />}
                    disableElevation={true}
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
                        Core value
                    </Typography>
                </BaseButton>
            </Box>
            <Typography
                variant="h2"
                fontFamily={"PP Telegraph"}
                fontWeight={400}
                fontSize={{ mobile: 28, miniTablet: 35, tablet: 50, laptop: 70, desktop: 80 }}
                lineHeight={"normal"}
                color={"rgba(0, 0, 0, 1)"}
                whiteSpace={"normal"}
                textAlign={"center"}
                marginBlock={"2rem"}
                sx={{
                    textWrap: "balance"
                }}
            >
                We're reinventing engineering experience
            </Typography>
            <Stack
                direction={{ mobile: "column", tablet: "row" }}
                gap={"var(--flexGap)"}
            >
                <Card
                    sx={{
                        flex: 1
                    }}
                >
                    <CardHeader
                        title={
                            <Typography
                                variant="h3"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={{ mobile: 24, laptop: 30 }}
                                lineHeight={"30px"}
                                color={"rgba(0, 0, 0, 1)"}
                                whiteSpace={"normal"}
                                marginBlockEnd={"2rem"}
                            >
                                Guiding Lights: Authenticity, Community, Sustainability
                            </Typography>
                        }
                        subheader={
                            <Typography
                                variant="body1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={{ mobile: 16, laptop: 18 }}
                                lineHeight={"30px"}
                                color={"rgba(0, 0, 0, 1)"}
                                whiteSpace={"normal"}
                            >
                                Darlots Services Limited is a group of professional engineers with wealth of experience in all disciplines of engineering, construction, installation and project management of oil and gas facilities.
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Typography
                            variant="body1"
                            fontFamily={"PP Telegraph"}
                            fontWeight={400}
                            fontSize={{ mobile: 16, laptop: 18 }}
                            lineHeight={"30px"}
                            color={"rgba(0, 0, 0, 1)"}
                            whiteSpace={"normal"}
                        >
                            Recent & Ongoing Projects / Services
                        </Typography>
                        <ul>
                            <li>
                                <Typography
                                    variant="body1"
                                    component={"span"}
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 16, laptop: 18 }}
                                    lineHeight={"30px"}
                                    color={"rgba(0, 0, 0, 1)"}
                                    whiteSpace={"normal"}
                                >
                                    Development of technical and commercial packages on the recent Marginal Field development (Oshe E & P Ltd)
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="body1"
                                    component={"span"}
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 16, laptop: 18 }}
                                    lineHeight={"30px"}
                                    color={"rgba(0, 0, 0, 1)"}
                                    whiteSpace={"normal"}
                                >
                                    Technical Manpower Supply and Management on the AKK Pipeline Project (ILF Consulting Engineers)
                                </Typography>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        backgroundImage: `url(${corevalue})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                        borderRadius: "10px",
                        flex: 1,
                        minHeight: { mobile: 658, tablet: "unset" }
                    }}
                />
            </Stack>
        </CoreValueBox>
    )
}