import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Logo } from "../../assets";
import { BaseButton } from "../button/styled";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { HashLink } from "react-router-hash-link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Menu } from "../button/menu";
import { Context } from "../../context";
import { FooterRefType } from "../../types/app.type";

export const Navbar: React.FC<FooterRefType> = ({ footerRef }) => {
    const navigate = useNavigate();
    const matches = useMediaQuery("(max-width: 768px)");
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        const nav = document.getElementById('nav');
        setOpenMenu(false);
        navigate("/");
        nav?.scrollIntoView({ behavior: "smooth" });
        if (matches) {
            setTimeout(() => {
                const header = document.getElementById('header');
                if (header) {
                    const yCoordinate = header.getBoundingClientRect().top + window.scrollY;
                    const yOffset = -108;
                    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
                }
            }, 100);
        }
    };
    const navigateToCalendly = () => {
        setOpenMenu(false);
        footerRef?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollWithOffset = (el: any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -108; //to account for navheight
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <Nav id="nav">
            <Logo
                className="logo"
                onClick={handleLogoClick}
            />
            <Stack
                direction={"row"}
                gap={{ tablet: "var(--flexGap)", laptop: "calc(2 * var(--flexGap))" }}
            >
                <ul>
                    {navLinks.map((link, k) => {
                        return (
                            <HashLink
                                key={k}
                                to={link.url}
                                smooth={true}
                                scroll={(el) => {
                                    if (matches) {
                                        scrollWithOffset(el);
                                    } else {
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                }}
                                style={{
                                    textDecoration: "none",
                                }}
                                onClick={() => setOpenMenu(false)}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={14}
                                    lineHeight={"normal"}
                                    color={"#111111"}
                                >
                                    {link.item}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </ul>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    overflow={"hidden"}
                >
                    <BaseButton
                        isheaderbutton={"false"}
                        endIcon={<ArrowOutwardIcon />}
                        disableElevation={true}
                        onClick={navigateToCalendly}
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
                            Contact us
                        </Typography>
                    </BaseButton>
                </Box>
            </Stack>
            <Menu />
        </Nav >
    )
}