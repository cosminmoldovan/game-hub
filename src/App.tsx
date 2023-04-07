import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // large screen > 1024
        }}
        // gridTemplateRows={"50px 1fr"}
        // gridTemplateColumns={"150px 1fr"}
        // h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="blue.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
