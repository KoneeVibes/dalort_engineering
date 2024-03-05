import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { services } from "../../data"
import { ServicesStack } from "./styled"

export const Services: React.FC<{}> = () => {
    return (
        <ServicesStack
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