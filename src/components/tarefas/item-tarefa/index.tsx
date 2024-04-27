import { Box, Button, Grid } from "@chakra-ui/react";

interface ItemTarefaProps {
    titulo: string
    idTarefa: number
    apagarTarefa(id: number): void
}

function ItemTarefa({ titulo, idTarefa, apagarTarefa }: ItemTarefaProps) {
    return (
        <Grid templateColumns='3fr 1fr' p={5} backgroundColor='gray' my={3}>
            <Box>
                {idTarefa} - {titulo}
            </Box>
            <Box>
                <Button colorScheme="green">Concluir</Button>
                <Button onClick={() => apagarTarefa(idTarefa)} colorScheme="red">Remover</Button>
            </Box>
        </Grid>
    )
}

export default ItemTarefa;