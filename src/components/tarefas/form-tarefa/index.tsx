import { Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { Tarefa } from "../../../interfaces/tarefas"

interface FormTarefaProps {
    tarefas: Tarefa[]
    setTarefas(tarefas: Tarefa[]): void
}

function FormTarefa({ tarefas, setTarefas }: FormTarefaProps) {

    const [nomeTarefa, setNomeTarefa] = useState('')

    function adicionarTarefa() {
        if (tarefas.length > 0) {
            const ultimoId = tarefas[tarefas.length - 1].id
            const novaTarefa = { id: ultimoId + 1, nome: nomeTarefa, concluida: false }
            setTarefas([...tarefas, novaTarefa])
        }
    }

    const inputTarefa = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (inputTarefa.current) inputTarefa.current.focus()
    }, [])

    return (
        <Flex alignItems='center' justifyContent='space-around'>
            <Input
                ref={inputTarefa}
                value={nomeTarefa}
                onChange={(e) => setNomeTarefa(e.target.value)}
                placeholder='Título da Tarefa'
                size='md'
            />
            <Checkbox>Realizado?</Checkbox>
            <Button onClick={adicionarTarefa} colorScheme="blue">Adicionar</Button>
        </Flex>

    )
}

export default FormTarefa