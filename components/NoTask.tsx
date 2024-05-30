import {Flex,Alert,AlertIcon} from "@chakra-ui/react";

const NoTask = () => {
    return (
        <Flex>
            <Alert status="warning">
                <AlertIcon />
                Pas de tâche
            </Alert>
        </Flex>
    )
}
export default NoTask
