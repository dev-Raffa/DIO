import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ICardInfo {
    mainContent: string,
    content: string,
    linkTo?: string
}

const CardInfo = ({ mainContent, content, linkTo }: ICardInfo) => {
  return (
    <Box 
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        borderRadius="25px"
    >
        <Text fontSize='2xl' fontWeight='bold'>
            { mainContent }
        </Text>
        { linkTo ? 
            <Link to={linkTo}> 
                {content}
            </Link>
            :
            <Text fontSize='xl'>
                { content }
            </Text>
        }
    </Box>
  );
};

export default CardInfo;
