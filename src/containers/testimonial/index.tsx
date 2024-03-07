import React from "react";
import { Box, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import { TestimonialBox } from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../data";

export const Testimonial: React.FC<{}> = () => {
    return (
        <TestimonialBox
            padding={{ mobile: "calc(2 * var(--sectionMargin)) var(--pagePadding)", desktop: "calc(2 * var(--sectionMargin)) calc(2 * var(--pagePadding))" }}
        >
            <Typography
                variant="h2"
                fontFamily={"Roboto"}
                fontWeight={400}
                fontSize={35}
                lineHeight={"normal"}
                color={"rgba(41, 38, 38, 1)"}
                whiteSpace={"normal"}
            >
                Our customers say it best
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Roboto"}
                fontWeight={500}
                fontSize={18}
                lineHeight={"normal"}
                color={"rgba(41, 38, 38, 1)"}
                marginBlockStart={"1rem"}
                marginBlockEnd={"calc(2 * var(--sectionMargin))"}
                sx={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(41, 38, 38, 1)",
                    textDecorationThickness: 3,
                    cursor: "pointer"
                }}
            >
                See all case studies
            </Typography>
            <Box>
                <Carousel
                    autoPlay={true}
                    stopOnHover={false}
                    infiniteLoop={true}
                    interval={2000}
                    emulateTouch={true}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    {testimonials.map((testimonial, key) => {
                        return (
                            <Stack
                                key={key}
                                direction={{ tablet: 'row' }}
                                gap={"var(--flexGap)"}
                            >
                                <Card
                                    sx={{
                                        background: "rgba(8, 59, 59, 1)",
                                        borderRadius: "10px",
                                        flex: 0.6
                                    }}
                                >
                                    <CardHeader
                                        subheader={
                                            <Typography
                                                variant="subtitle1"
                                                fontFamily={"Roboto"}
                                                fontWeight={500}
                                                fontSize={16}
                                                lineHeight={"normal"}
                                                whiteSpace={"normal"}
                                                display={"inline-flex"}
                                                gap={".5rem"}
                                                flexWrap={"wrap"}
                                            >
                                                <span
                                                    style={{
                                                        color: "rgba(255, 255, 255, 1)"
                                                    }}
                                                >
                                                    Makenna Shaw
                                                </span>
                                                <span
                                                    style={{
                                                        color: "rgba(255, 255, 255, 1)"
                                                    }}
                                                >
                                                    Assistant City Manger
                                                </span>
                                            </Typography>
                                        }
                                        sx={{
                                            margin: "calc(1 * var(--sectionMargin))",
                                            padding: 0,
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            margin: "calc(2 * var(--sectionMargin))",
                                            padding: 0,
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            fontFamily={"PP Telegraph"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 30, desktop: 36 }}
                                            lineHeight={"36px"}
                                            whiteSpace={"wrap"}
                                            color={"rgba(255, 255, 255, 1)"}
                                        >
                                            {testimonial.message}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card
                                    sx={{
                                        flex: 0.4,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardMedia
                                        component={"img"}
                                        src={testimonial.bg}
                                        sx={{
                                            borderRadius: "inherit",
                                            height: "100%",
                                        }}
                                    />
                                </Card>
                            </Stack>
                        )
                    })}
                </Carousel>
            </Box>
        </TestimonialBox >
    )
}