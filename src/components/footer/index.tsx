import { useNavigate } from "react-router-dom";
import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { Footerbox } from "./styled";
import { Logo } from "../../assets";
import { BaseButton } from "../button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { contactDetails, smIcons } from "../../data";
import { FooterRefType } from "../../types/app.type";

export const Footer: React.FC<FooterRefType> = ({ footerRef, calendlyRef, page }) => {
    const navigate = useNavigate();
    const matches = useMediaQuery("(max-width: 768px)");
    return (
        <Footerbox
            ref={footerRef}
            margin={{ mobile: "calc(2 * var(--sectionMargin)) 0", desktop: "calc(3 * var(--sectionMargin)) 0" }}
            padding={"calc(2 * var(--sectionMargin)) var(--pagePadding)"}
        >
            <Stack
                gap={"var(--sectionMargin)"}
                width={{ tablet: "50%", laptop: "30%" }}
            >
                <Logo className="logo" />
                <Box
                    overflow={"hidden"}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"PP Telegraph"}
                        fontWeight={400}
                        fontSize={20}
                        lineHeight={"30px"}
                        color={"rgba(0, 0, 0, 1)"}
                        marginBlock={"1rem"}
                        whiteSpace={"normal"}
                    >
                        Let's talk about how Darlots can help you with your next engineering project
                    </Typography>
                    <BaseButton
                        className="bookASession"
                        isheaderbutton={"false"}
                        location="footer"
                        endIcon={<ArrowOutwardIcon />}
                        disableElevation={true}
                        onClick={() => {
                            if (page === "home") {
                                if (matches) {
                                    if (!calendlyRef || !calendlyRef.current) return
                                    const yCoordinate = calendlyRef?.current?.getBoundingClientRect().top + window.scrollY;
                                    const yOffset = -108; //to account for navheight
                                    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
                                } else {
                                    calendlyRef?.current?.scrollIntoView({ behavior: "smooth" })
                                }
                            } else {
                                navigate('/');
                                if (matches) {
                                    setTimeout(() => {
                                        const calendly = document.getElementById('calendly');
                                        if (calendly) {
                                            const yCoordinate = calendly.getBoundingClientRect().top + window.scrollY;
                                            const yOffset = -108; //to account for navheight
                                            window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
                                        }
                                    }, 100);
                                } else {
                                    setTimeout(() => {
                                        const calendly = document.getElementById('calendly');
                                        if (calendly) {
                                            calendly.scrollIntoView({ behavior: "smooth" })
                                        }
                                    }, 100);
                                }
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
                            Book a session
                        </Typography>
                    </BaseButton>
                </Box>
            </Stack>
            <Stack
                direction={{ mobile: "column-reverse", laptop: "column" }}
                gap={{ mobile: ".5rem", laptop: "4rem" }}
            >
                <Stack
                    direction={"row"}
                    gap={{ mobile: ".5rem", tablet: "2rem" }}
                    flexWrap={"wrap"}
                    overflow={"hidden"}
                    sx={{
                        "& svg": {
                            color: "#000000",
                        }
                    }}
                >
                    {smIcons.map((icon, key) => {
                        return (
                            <IconButton
                                key={key}
                                sx={{
                                    padding: 0
                                }}
                            >
                                {icon}
                            </IconButton>
                        )
                    })}
                </Stack>
                <Stack>
                    {Object.entries(contactDetails).map((detail, key) => {
                        return (
                            <Typography
                                key={key}
                                variant="subtitle1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={"normal"}
                                color={"rgba(0, 0, 0, 1)"}
                                marginBlock={".5rem"}
                                whiteSpace={"normal"}
                            >
                                {detail}
                            </Typography>
                        )
                    })}
                </Stack>
            </Stack>
        </Footerbox>
    )
}