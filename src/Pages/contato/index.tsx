import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import FormFatec from "../../components/form-fatec";
import Layout from "../../components/layouts";

function Contato() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Meus Contatos</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Preencha o formulário abaixo e entraremos em contato.
                    </Text>
                    <Center py={6}>
                        <Box
                            maxW={'520px'}
                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'}>
                            <FormFatec />
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </Layout>
    )
}

export default Contato;