import { useNavigate } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { OverviewPropsType } from "../../types/app.type";
import { OverviewStack } from "./styled";
import { BaseButton } from "../button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Overview: React.FC<OverviewPropsType> = ({ service }) => {
    const navigate = useNavigate();
    const matches = useMediaQuery("(max-width: 768px)");
    return (
        <OverviewStack>
            <Typography
                variant="h2"
                fontFamily={"PP Telegraph"}
                fontWeight={400}
                fontSize={{ mobile: 25 }}
                lineHeight={"normal"}
                color={"#292929"}
                whiteSpace={"normal"}
                sx={{
                    textWrap: { mobile: "pretty", tablet: "balance" },
                    flex: 0.4
                }}
            >
                {service?.body}
            </Typography>
            <Box
                flex={0.6}
            >
                <ul>
                    <legend>{service?.legend}</legend>
                    {service?.deliverables.map((deliverable, key) => {
                        return (
                            <li key={key}>{deliverable}</li>
                        )
                    })}
                </ul>
                <BaseButton
                    isheaderbutton={"false"}
                    location="footer"
                    endIcon={<ArrowOutwardIcon />}
                    disableElevation={true}
                    onClick={() => {
                        navigate('/');
                        if (matches) {
                            setTimeout(() => {
                                const services = document.getElementById('services');
                                if (services) {
                                    const yCoordinate = services.getBoundingClientRect().top + window.scrollY;
                                    const yOffset = -108; //to account for navheight
                                    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
                                }
                            }, 100);
                        } else {
                            setTimeout(() => {
                                const services = document.getElementById('services');
                                if (services) {
                                    services.scrollIntoView({ behavior: "smooth" })
                                }
                            }, 100);
                        }
                    }}
                    sx={{
                        background: "#0A3237",
                        "&:hover": {
                            background: "#0A3237",
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
                        Back to services
                    </Typography>
                </BaseButton>
            </Box>
        </OverviewStack>
    )
}