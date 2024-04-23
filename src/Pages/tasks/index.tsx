import { Box, Button, Card, CardBody, Center, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts";
import InputFatec from "../../components/input-fatec";
import ListTasks from "../../components/listTask";

function Tasks() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Tarefas</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Lista de Tarefas.
                    </Text>
                    <Center py={6}>
                        <Box
                            maxW={'520px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'}>

                            <Stack spacing={4}>
                                <FormControl id="task">
                                    <FormLabel>Inserir nova tarefa</FormLabel>
                                    <HStack>
                                        <InputFatec text='Digite o título da Tarefa' defaultvalue='' type='text' />
                                        <Checkbox>Realizada?</Checkbox>
                                        <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }}>
                                            Inserir
                                        </Button>
                                    </HStack>
                                </FormControl>
                            </Stack>
                            <Stack py={4}>
                                <ListTasks text='Tarefa' />
                            </Stack>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </Layout>
    )
}

export default Tasks;