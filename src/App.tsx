import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // large screen > 1024
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area={"nav"} px={6}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} px={6}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
