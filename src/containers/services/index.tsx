import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { services } from "../../data";
import { ServicesStack } from "./styled";
import { BaseButton } from "../../components/button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Services: React.FC<{}> = () => {
    return (
        <ServicesStack
            id="services"
            margin={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding)", desktop: "calc(3 * var(--sectionMargin)) var(--pagePadding)" }}
            direction={{ mobile: "column", laptop: "row" }}
            gap={"var(--flexGap)"}
            justifyContent={"space-between"}
        >
            {
                services.map((service, k) => {
                    return (
                        <Card
                            key={k}
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
                                        fontSize={{ mobile: 30, laptop: 30, desktop: 35 }}
                                        lineHeight={"normal"}
                                        color={"rgba(255, 255, 255, 1)"}
                                        whiteSpace={"wrap"}
                                    >
                                        {service.header}
                                    </Typography>
                                }
                            />
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={16}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 1)"}
                                    whiteSpace={"normal"}
                                >
                                    {service.body}
                                </Typography>
                                <Box
                                    overflow={"hidden"}
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
                                            Learn more
                                        </Typography>
                                    </BaseButton>
                                </Box>
                            </CardContent>
                            <CardMedia
                                component={"img"}
                                src={service.icon}
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    width: "auto"
                                }}
                            />
                        </Card>
                    )
                })
            }
        </ServicesStack >
    )
}