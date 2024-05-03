import { Box, Button, Card, CardBody, Grid, HStack, Text } from "@chakra-ui/react";

interface ItemTaskProps {
    titulo: string
    idTarefa: number
    deleteTask(id: number): void
}

function ItemTask({ titulo, idTarefa, deleteTask }: ItemTaskProps) {
    return (
        <>
            {
                <Card variant={'filled'}>
                    <HStack>
                        <CardBody textAlign={'left'}>
                            <Text>{idTarefa} - {titulo}</Text>
                        </CardBody>
                        <Button colorScheme="green">Concluir</Button>
                        <Button onClick={() => deleteTask(idTarefa)} colorScheme="red">Remover</Button>
                    </HStack>
                </Card>
            }
        </>
    )
}

export default ItemTask;