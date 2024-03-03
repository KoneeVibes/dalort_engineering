import { Typography } from "@mui/material";
import { Hamburger } from "./styled";
import { useContext } from "react";
import { Context } from "../../../context";

export const Menu: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    return (
        <Hamburger
            component={"button"}
            onClick={() => setOpenMenu(!openMenu)}
        >
            <Typography component={"span"}></Typography>
            <Typography component={"span"}></Typography>
            <Typography component={"span"}></Typography>
        </Hamburger>
    )
}