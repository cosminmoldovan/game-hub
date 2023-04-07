import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

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
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
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
