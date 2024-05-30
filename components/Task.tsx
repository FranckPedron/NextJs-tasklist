import {Card,Flex, Text,Button} from "@chakra-ui/react";
import {CheckIcon, DeleteIcon} from "@chakra-ui/icons";

import{ TaskProps} from "@types";

const Task = ({iTask,handleCompleteTask,handleDeleteTask}:TaskProps) => {
    return (
        <Card p="2rem" mb="0.5rem" variant="outline">
            <Flex alignItems="center">
                {iTask.completed ? (
                    <Text flexGrow="1" as="del">{iTask.task}</Text>
                ):(
                    <Text flexGrow="1">{iTask.task}</Text>
                )}
                <Flex>
                    {iTask.completed ? (
                        <Button
                            ml="1rem"
                            colorScheme="whatsapp"
                            isDisabled>
                            <CheckIcon/>
                        </Button>
                    ):(
                        <Button
                            ml="1rem"
                            colorScheme="whatsapp"
                            onClick={() => handleCompleteTask(iTask._id)}>
                            <CheckIcon/>
                        </Button>
                    )}
                    <Button
                        ml="1rem"
                        colorScheme="red"
                        onClick={() => handleDeleteTask(iTask._id)}>
                        <DeleteIcon/>
                    </Button>
                </Flex>
            </Flex>
        </Card>
    )
}
export default Task
