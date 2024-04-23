import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts";

function Home() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Home Page</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Este projeto é a conclusão da N1 da disciplina de Programação Web.
                    </Text>
                </Stack>
            </Box>
        </Layout >
    );
}

export default Home;
