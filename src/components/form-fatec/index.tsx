import { Box, Stack } from "@chakra-ui/react"
import ButtonFatec from "../button-fatec"
import InputFatec from "../input-fatec"

function FormFatec() {
    return (
        <>
            <Box as={'form'}>
                <Stack spacing={4} w={'full'}>
                    <InputFatec text='Nome' defaultvalue='Luis Gaspari' type='text' />
                    <InputFatec text='E-mail' defaultvalue='' type='email' />
                    <InputFatec text='Telefone' defaultvalue='' type='tel' />
                    <ButtonFatec type='button' label='Fatec: Enviar mensagem' />
                </Stack>
            </Box>
        </>
    )
}

export default FormFatec