import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { QandAStack } from "./style";
import { QandAStackProps } from "../../../../types/app.type";
import AddSharpIcon from '@mui/icons-material/AddSharp';

export const QandA: React.FC<QandAStackProps> = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <QandAStack
            isactive={`${isActive}`}
        >
            <Box
                display={"flex"}
            >
                <Typography
                    variant="h3"
                    fontFamily={"PP Telegraph"}
                    fontWeight={400}
                    fontSize={{ mobile: 23, tablet: 28 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    color={"rgba(0, 0, 0, 1)"}
                    marginBlockEnd={"1rem"}
                    flex={0.9}
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={() => setIsActive(!isActive)}
                >
                    {question}
                </Typography>
                <AddSharpIcon
                    sx={{
                        flex: 0.1,
                        color: "rgba(178, 178, 178, 1)",
                        cursor: "pointer"
                    }}
                    onClick={() => setIsActive(!isActive)}
                />
            </Box>
            <Typography
                variant="h3"
                className="answer"
                fontFamily={"PP Telegraph"}
                fontWeight={400}
                fontSize={15}
                lineHeight={"20px"}
                whiteSpace={"normal"}
                color={"rgba(50, 50, 50, 1)"}
            >
                {answer}
            </Typography>
        </QandAStack>
    )
}