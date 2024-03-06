import { CardActions, CardContent, CardHeader, CardMedia, Stack, Typography } from "@mui/material";
import { BenefitsCard } from "./styled";
import { benefits } from "../../data";
import React from "react";
import { BaseButton } from "../../components/button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import build from "../../assets/build.svg";
import { theme } from "../../theme";

export const Benefits: React.FC<{}> = () => {
    return (
        <BenefitsCard>
            <CardMedia
                component={"img"}
                src={build}
                sx={{
                    position: "static",
                    [theme.breakpoints.up(280)]: {
                        position: { mobile: "absolute" },
                        top: -100,
                        width: "auto",
                    },
                }}
            />
            <CardHeader
                title={
                    <Typography
                        variant="h2"
                        fontFamily={"PP Telegraph"}
                        fontWeight={800}
                        fontSize={{ mobile: 30, tablet: 35, desktop: 40 }}
                        lineHeight={"normal"}
                        color={"rgba(255, 255, 255, 1)"}
                        marginBlockStart={"4rem"}
                        marginBlockEnd={"2rem"}
                        whiteSpace={"normal"}
                        sx={{
                            textWrap: "balance"
                        }}
                    >
                        We have all the <span style={{ color: "rgba(0, 169, 118, 1)" }}>protection</span> <br />you need for your next project
                    </Typography>
                }
                subheader={
                    <Typography
                        variant="body1"
                        fontFamily={"PP Telegraph"}
                        fontWeight={400}
                        fontSize={{ mobile: 16, laptop: 18 }}
                        lineHeight={"normal"}
                        color={"rgba(255, 255, 255, 1)"}
                        marginBlockEnd={{ mobile: "1rem", miniTablet: "3rem" }}
                        whiteSpace={"normal"}
                    >
                        Our engineering services and procurement  include the following benefits and much more.
                    </Typography>
                }
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: { mobile: "column", tablet: "row", desktop: "column" },
                    gap: "var(--flexGap)",
                    justifyContent: "space-between"
                }}
            >
                <Stack
                    direction={{ mobile: "column", desktop: "row" }}
                    alignItems={{ desktop: "center" }}
                    gap={"var(--flexGap)"}
                    justifyContent={"space-between"}
                    width={{ mobile: "auto", tablet: "50%", desktop: "auto" }}
                >
                    {benefits.slice(0, 3).map((benefit, k) => {
                        return (
                            <Stack
                                key={k}
                                direction={"row"}
                                alignItems={"center"}
                                gap={".5rem"}
                            >
                                <React.Fragment>
                                    {benefit.icon}
                                </React.Fragment>
                                <Typography
                                    variant="body1"
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 20, miniTablet: 28 }}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 1)"}
                                    whiteSpace={"normal"}
                                    textTransform={"capitalize"}
                                >
                                    {benefit.title}
                                </Typography>
                            </Stack>
                        )
                    })}
                </Stack>
                <Stack
                    direction={{ mobile: "column", desktop: "row" }}
                    alignItems={{ desktop: "center" }}
                    gap={"var(--flexGap)"}
                    justifyContent={"space-between"}
                    width={{ mobile: "auto", tablet: "50%", desktop: "auto" }}
                >
                    {benefits.slice(3, 6).map((benefit, k) => {
                        return (
                            <Stack
                                key={k}
                                direction={"row"}
                                alignItems={"center"}
                                gap={".5rem"}
                            >
                                <React.Fragment>
                                    {benefit.icon}
                                </React.Fragment>
                                <Typography
                                    variant="body1"
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 20, miniTablet: 28 }}
                                    lineHeight={"normal"}
                                    color={"rgba(255, 255, 255, 1)"}
                                    whiteSpace={"normal"}
                                    textTransform={"capitalize"}
                                >
                                    {benefit.title}
                                </Typography>
                            </Stack>
                        )
                    })}
                </Stack>
            </CardContent>
            <CardActions
                sx={{
                    paddingTop: { mobile: "var(--sectionMargin)", miniTablet: "calc(2 * var(--sectionMargin))" },
                    overflow: "hidden"
                }}
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
                        Book a session
                    </Typography>
                </BaseButton>
            </CardActions>
        </BenefitsCard >
    )
}