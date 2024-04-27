import Layout from "../../components/layouts";
import { Link } from "react-router-dom";
import ItemTarefa from "../../components/tarefas/item-tarefa";
import { useEffect, useState } from "react";
import FormTarefa from "../../components/tarefas/form-tarefa";
import { Tarefa } from "../../interfaces/tarefas";

function Tarefas() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([
        // { id: 1, nome: 'Tarefa 1', concluida: false },
        // { id: 2, nome: 'Tarefa 2', concluida: false },
    ]);

    function carregarLista() {
        return [
            { id: 1, nome: 'Tarefa 1', concluida: false },
            { id: 2, nome: 'Tarefa 2', concluida: false },
        ]
    }

    useEffect(() => {
        const tarefas = carregarLista();
        setTarefas(tarefas);
    }, []);

    function apagarTarefa(id: number) {
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
        setTarefas(tarefasAtualizadas)
    }

    return (
        <Layout>
            <h1>Taferas</h1>
            <Link to='/'>Voltar para Home</Link>
            <hr />
            <FormTarefa tarefas={tarefas} setTarefas={setTarefas} />
            {
                tarefas.map((tarefa) => (
                    <ItemTarefa
                        key={tarefa.id}
                        apagarTarefa={apagarTarefa}
                        titulo={tarefa.nome}
                        idTarefa={tarefa.id}
                    />
                ))
            }
        </Layout>
    );
}

export default Tarefas;
