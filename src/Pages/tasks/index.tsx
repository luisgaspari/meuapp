import { Box, Button, Center, Checkbox, Container, FormControl, FormLabel, HStack, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts";
import InputFatec from "../../components/input-fatec";
import { useEffect, useState } from "react";
import { Task } from "../../interfaces/tasks";
import FormTask from "../../components/tasks/formTask";
import ItemTask from "../../components/tasks/itemTask";

function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([
        // { id: 1, nome: 'Tarefa Manual 1', concluida: false },
        // { id: 2, nome: 'Tarefa Manual 2', concluida: false },
    ]);

    function loadList() {
        return [
            { id: 1, nome: 'Tarefa 1 Inicio', concluida: false },
            { id: 2, nome: 'Tarefa 2 Inicio', concluida: false },
        ]
    }

    useEffect(() => {
        const tasks = loadList();
        setTasks(tasks);
    }, []);

    function deleteTask(id: number) {
        const tasksUpdated = tasks.filter((task) => task.id !== id);
        setTasks(tasksUpdated)
    }

    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Tarefas</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Lista de Tarefas
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
                            <Stack py={4}>
                                <FormTask tasks={tasks} setTasks={setTasks} />
                                {
                                    tasks.map((task) => (
                                        <ItemTask
                                            key={task.id}
                                            deleteTask={deleteTask}
                                            titulo={task.nome}
                                            idTarefa={task.id}
                                        />
                                    ))
                                }
                            </Stack>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </Layout>
    )
}

export default Tasks;