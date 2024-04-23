import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import ButtonFatec from "../button-fatec";

interface Props {
    tasks: string[];
}

function ListTasks({ tasks }: Props) {
    return (
        <>
            {
                tasks.map((task) => (
                    <Card variant={'filled'}>
                        <HStack>
                            <CardBody textAlign={'left'}>
                                <Text>{task}</Text>
                            </CardBody>
                            <ButtonFatec type='button' label='Pendente' />
                            <ButtonFatec type='button' label='Excluir' />
                        </HStack>
                    </Card>
                ))
            }
        </>
    );
}

export default ListTasks;