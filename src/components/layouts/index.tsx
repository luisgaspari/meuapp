import { Grid, GridItem } from "@chakra-ui/react";
import Rodape from "../rodape";
import Topo from "../topo";

interface LayoutProps {
    children: React.ReactNode
}

function Layout(Props: LayoutProps) {
    const { children } = Props;
    return (
        <Grid className="grid" templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem colSpan={1} rowSpan={1}>
                <Topo />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                {children}
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Rodape />
            </GridItem>
        </Grid >
    );
}

export default Layout;