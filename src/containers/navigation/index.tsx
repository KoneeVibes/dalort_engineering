import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import { navLinks } from "../../data";
import { Nav } from "./styled";
import { HashLink } from "react-router-hash-link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Menu } from "../../components/button/menu";
import { Context } from "../../context";

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };
    return (
        <Nav>
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
                        onClick={() => setOpenMenu(false)}
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
        </Nav>
    )
}