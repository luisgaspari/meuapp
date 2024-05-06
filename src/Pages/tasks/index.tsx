import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts";
import { useEffect, useState } from "react";
import { Task } from "../../interfaces/tasks";
import FormTask from "../../components/tasks/formTask";
import ItemTask from "../../components/tasks/itemTask";
import api from "../../helpers/axios";

function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([]);

    async function loadList() {
        const response = await api.get('/task')
        if (response.status === 200) {
            setTasks(response.data)
        }
    }

    useEffect(() => {
        loadList()
    }, [])

    function deleteTask(id: number) {
        api.delete(`/task/${id}`)
            .then(response => {
                if (response.status === 204) {
                    loadList
                } else {
                    alert('Erro ao deletar')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function modifyStatus(task: Task) {
        task.completed = !task.completed
        api.put(`/task/${task.id}`, task)
            .then(() => {
                loadList()
            })
            .catch((error) => {
                console.log(error)
            })
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
                                <FormTask loadList={loadList} />
                                {
                                    tasks.map((task) => (
                                        <ItemTask
                                            key={task.id}
                                            deleteTask={deleteTask}
                                            modifyStatus={modifyStatus}
                                            task={task}
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