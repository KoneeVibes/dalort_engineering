import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { OverviewPropsType } from "../../types/app.type";
import { OverviewStack } from "./styled";
import { BaseButton } from "../button/styled";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Overview: React.FC<OverviewPropsType> = ({ service }) => {
    const navigate = useNavigate();
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
                        setTimeout(() => {
                            const services = document.getElementById('services');
                            if (services) {
                                services.scrollIntoView({ behavior: "smooth" })
                            }
                        }, 100);
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