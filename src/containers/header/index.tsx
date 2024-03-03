import { Box } from "@mui/material";
import headerBg from "../../assets/headerBg.svg";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: 900,
            }}
        >

        </Box>
    )
}