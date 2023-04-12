import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPltform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // large screen > 1024
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"} px={6}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} px={6}>
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={10}>
          <PlatformSelector onSelectPlatform={(platform)=>setSelectedPlatform(platform)} selectedPlatform={selectedPltform}/>
          <GameGrid selectedGenre={selectedGenre} selectedPltform={selectedPltform}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
