import { Button, Checkbox, FormControl, FormLabel, HStack, Input, Stack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../../../helpers/axios"
import { PostTask } from "../../../interfaces/tasks"

interface FormTaskProps {
    loadList(): void
}

function FormTask({ loadList }: FormTaskProps) {

    const [taskName, setTaskName] = useState('')
    const [taskCompleted, setTaskCompleted] = useState(false)

    function addTask() {
        if (taskName != '') {
            const newTask: PostTask = {
                title: taskName,
                completed: taskCompleted
            }
            api.post('/task', newTask)
                .then(() => {
                    setTaskName('')
                    loadList()
                })
        }
    }

    const inputTask = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (inputTask.current) inputTask.current.focus()
    }, [])

    return (
        <Stack spacing={4}>
            <FormControl id="task">
                <FormLabel>Inserir nova tarefa</FormLabel>
                <HStack>
                    <Input
                        ref={inputTask}
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder='Título da Tarefa'
                        size='md'
                    />
                    <Checkbox onChange={(event) => setTaskCompleted(event.target.checked)}>Realizado?</Checkbox>
                    <Button onClick={addTask} colorScheme="blue">Adicionar</Button>
                </HStack>
            </FormControl>
        </Stack>
    )
}

export default FormTask