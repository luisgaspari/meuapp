import { Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, Stack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { Task } from "../../../interfaces/tasks"

interface FormTaskProps {
    tasks: Task[]
    setTasks(tasks: Task[]): void
}

function FormTask({ tasks, setTasks }: FormTaskProps) {

    const [taskName, setTaskName] = useState('')

    function addTask() {
        if (tasks.length > 0) {
            const lastId = tasks[tasks.length - 1].id
            const newTask = { id: lastId + 1, nome: taskName, concluida: false }
            setTasks([...tasks, newTask])
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
                    <Checkbox>Realizado?</Checkbox>
                    <Button onClick={addTask} colorScheme="blue">Adicionar</Button>
                </HStack>
            </FormControl>
        </Stack>
    )
}

export default FormTask