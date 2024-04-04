import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Footerbox } from "./styled";
import { Logo } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { navLinks, smIcons } from "../../data";
import { FooterRefType } from "../../types/app.type";

export const Footer: React.FC<FooterRefType> = ({ footerRef }) => {
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
                direction={{ mobile: "column-reverse", tablet: "column" }}
                gap={{ mobile: ".5rem", tablet: "4rem" }}
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
                    {navLinks.map((link, k) => {
                        return (
                            <Typography
                                key={k}
                                variant="subtitle1"
                                fontFamily={"PP Telegraph"}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={"normal"}
                                color={"rgba(0, 0, 0, 1)"}
                                marginBlock={".5rem"}
                            >
                                {link.item}
                            </Typography>
                        )
                    })}
                </Stack>
            </Stack>
        </Footerbox>
    )
}