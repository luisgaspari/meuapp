import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import ButtonFatec from "../button-fatec";

interface Props {
    text: string;
}

function ListTasks({ text }: Props) {
    return (
        <Card>
            <HStack>
                <CardBody textAlign={'left'}>
                    <Text>{text}</Text>
                </CardBody>
                <ButtonFatec type='button' label='Pendente' />
                <ButtonFatec type='button' label='Excluir' />
            </HStack>
        </Card>
    );
}

export default ListTasks;