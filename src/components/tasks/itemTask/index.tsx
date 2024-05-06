import { Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { Task } from "../../../interfaces/tasks";

interface ItemTaskProps {
    task: Task
    deleteTask(id: number): void
    modifyStatus(task: Task): void
}

function ItemTask({ task, deleteTask, modifyStatus }: ItemTaskProps) {
    return (
        <>
            <Card variant={'filled'}>
                <HStack>
                    <CardBody textAlign={'left'}>
                        <Text>{task.id} - {task.title}</Text>
                    </CardBody>
                    <Button onClick={() => modifyStatus(task)}
                        colorScheme={task.completed ? "green" : "orange"}>
                        {task.completed ? "Finalizada" : "Pendente"}
                    </Button>
                    <Button onClick={() => deleteTask(task.id)} colorScheme="red">Remover</Button>
                </HStack>
            </Card>
        </>
    )
}

export default ItemTask;