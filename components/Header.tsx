import {Flex, Heading, Text, Input, Button} from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <Flex p="2rem" direction="column" alignItems="center">
                <Heading as="h1" size="4x1" noOfLines={1} className="tasklist-title">
                    TaskList.io
                </Heading>
                <Text mt="1rem" className="tasklist-slogan">
                    TaskList est un outil qui vous simplifie votre quotidien
                </Text>
            </Flex>
        </>
    )
}
export default Header

