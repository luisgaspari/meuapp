import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts";

function Sobre() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Sobre</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Informações sobre o projeto e o desenvolvedor.
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
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                Luis Antonio Gaspari
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} mb={4}>
                                luis.gaspari@fatec.sp.gov.br
                            </Text>
                            <Text
                                textAlign={'center'}
                                color={useColorModeValue('gray.700', 'gray.400')}
                                px={3}>
                                <Text as='b'>Fatec Indaiatuba</Text> <br />
                                Análise e Desenvolvimento de Sistemas <br />
                                4º Semestre - 2024
                            </Text>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </Layout>
    );
}

export default Sobre;
