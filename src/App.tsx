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
        gap="1"
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem bg="blue.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
